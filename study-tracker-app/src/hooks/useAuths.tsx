// src/hooks/useAuth.ts
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login as loginAction, logout as logoutAction } from '../store/slices/authSlices';
import * as authService from '../services/authServices';
import type { RootState } from '../store/store';

export function useAuth() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const login = useCallback(async (email: string, password: string) => {
    const user = await authService.login(email, password);
    dispatch(loginAction(user));
    localStorage.setItem('user', JSON.stringify(user));
  }, [dispatch]);

  const register = useCallback(async (name: string, email: string, password: string) => {
    const user = await authService.register({ name, email, password });
    dispatch(loginAction(user));
    localStorage.setItem('user', JSON.stringify(user));
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(logoutAction());
    localStorage.removeItem('user');
  }, [dispatch]);

  return { user, isAuthenticated, login, register, logout };
}
