import { useState, useEffect } from 'react';
import moment from 'moment';

interface UseAppUsageTrackerReturn {
  todayAppTime: number;    // phút hôm nay
  weeklyAppTime: number;   // phút trong tuần
  totalAppTime: number;    // tổng phút
}

// Giả lập dữ liệu dùng app
const fetchAppUsageSessions = (): { date: string; duration: number }[] => {
  return [
    { date: moment().subtract(1, 'days').toISOString(), duration: 30 },
    { date: moment().toISOString(), duration: 45 },
    { date: moment().subtract(2, 'days').toISOString(), duration: 20 },
    { date: moment().subtract(6, 'days').toISOString(), duration: 50 },
  ];
};

export const useAppUsageTracker = (): UseAppUsageTrackerReturn => {
  const [todayAppTime, setTodayAppTime] = useState(0);
  const [weeklyAppTime, setWeeklyAppTime] = useState(0);
  const [totalAppTime, setTotalAppTime] = useState(0);

  useEffect(() => {
    const updateUsage = () => {
      const now = moment();
      const sessions = fetchAppUsageSessions();

      const todayMinutes = sessions
        .filter(s => moment(s.date).isSame(now, 'day'))
        .reduce((acc, cur) => acc + cur.duration, 0);

      const weekMinutes = sessions
        .filter(s => moment(s.date).isSame(now, 'week'))
        .reduce((acc, cur) => acc + cur.duration, 0);

      const totalMinutes = sessions.reduce((acc, cur) => acc + cur.duration, 0);

      setTodayAppTime(todayMinutes);
      setWeeklyAppTime(weekMinutes);
      setTotalAppTime(totalMinutes);
    };

    updateUsage();
    const interval = setInterval(updateUsage, 60000);

    return () => clearInterval(interval);
  }, []);

  return { todayAppTime, weeklyAppTime, totalAppTime };
};
