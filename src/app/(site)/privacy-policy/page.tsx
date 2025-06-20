'use client';

import Breadcrumb from '@/components/Breadscum';

export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb title="Chính sách bảo mật" />
      <section className="privacy-policy-section pt-0">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-10 px-4 space-y-6">
          <h1 className="text-3xl font-bold mb-6">- Chính sách bảo mật</h1>

          <p>
            TalkToDoc cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn.
          </p>

          <Section title="1. Phạm vi áp dụng">
            <p>
              Áp dụng cho tất cả người dùng truy cập website, ứng dụng và dịch vụ liên quan đến TalkToDoc.
            </p>
          </Section>

          <Section title="2. Loại thông tin chúng tôi thu thập">
            <ul className="list-disc pl-5 space-y-1">
              <li>Thông tin cá nhân: họ tên, email, số điện thoại, địa chỉ.</li>
              <li>Thông tin tài khoản: tên đăng nhập, mật khẩu (được mã hóa).</li>
              <li>Thông tin giao dịch: lịch sử đặt lịch, thanh toán, hóa đơn.</li>
              <li>Thông tin kỹ thuật: địa chỉ IP, trình duyệt, cookies.</li>
            </ul>
          </Section>

          <Section title="3. Mục đích sử dụng thông tin">
            <ul className="list-disc pl-5 space-y-1">
              <li>Cung cấp dịch vụ, chăm sóc khách hàng.</li>
              <li>Xác minh danh tính, bảo mật tài khoản.</li>
              <li>Phân tích hành vi để cải thiện trải nghiệm.</li>
              <li>Gửi thông báo, khuyến mãi, cập nhật.</li>
              <li>Tuân thủ quy định pháp luật.</li>
            </ul>
          </Section>

          <Section title="4. Lưu trữ & bảo mật dữ liệu">
            <p>
              Dữ liệu được lưu trữ trên hệ thống bảo mật cao, áp dụng mã hóa và kiểm soát truy cập để ngăn chặn rò rỉ, thất thoát.
            </p>
          </Section>

          <Section title="5. Chia sẻ thông tin cá nhân">
            <p>Chúng tôi không chia sẻ dữ liệu trừ các trường hợp:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Có sự đồng ý của bạn.</li>
              <li>Yêu cầu bởi pháp luật hoặc cơ quan nhà nước.</li>
              <li>Đối tác kỹ thuật có ràng buộc bảo mật nghiêm ngặt.</li>
            </ul>
          </Section>

          <Section title="6. Cookies & theo dõi">
            <p>
              Sử dụng cookies để ghi nhớ đăng nhập, cá nhân hóa nội dung. Bạn có thể tắt cookies trong trình duyệt nếu muốn.
            </p>
          </Section>

          <Section title="7. Quyền của người dùng">
            <ul className="list-disc pl-5 space-y-1">
              <li>Truy cập, chỉnh sửa thông tin cá nhân.</li>
              <li>Yêu cầu xóa dữ liệu khi không sử dụng dịch vụ.</li>
              <li>Rút lại sự đồng ý bất kỳ lúc nào.</li>
            </ul>
          </Section>

          <Section title="8. Thời gian lưu trữ">
            <p>
              Dữ liệu được lưu đến khi không còn cần thiết hoặc theo yêu cầu pháp luật. Bạn có thể yêu cầu xóa sớm hơn.
            </p>
          </Section>

          <Section title="9. Cập nhật chính sách">
            <p>
              Chính sách có thể thay đổi. Chúng tôi sẽ thông báo trên website hoặc qua email nếu có cập nhật quan trọng.
            </p>
          </Section>

          <Section title="10. Liên hệ">
            <ul className="list-disc pl-5 space-y-1">
              <li>Email: talktodoc.vlu@gmail.com</li>
              <li>SĐT: 0909 999 999</li>
              <li>Địa chỉ: 69/68 Đặng Thùy Trâm, Phường 13, Quận Bình Thạnh</li>
            </ul>
          </Section>
          <Section title="11. Chính sách sử dụng Trí tuệ nhân tạo (AI)">
            <Section title="1. Mục đích của AI trong hệ thống">
              <p>
                AI trong TalkToDoc được thiết kế để hỗ trợ người dùng tìm hiểu thông tin sơ bộ về quy trình khám bệnh, dịch vụ y tế, hướng dẫn sử dụng nền tảng, và giải đáp các thắc mắc thường gặp. AI <strong>không đóng vai trò thay thế bác sĩ</strong>, không chẩn đoán hay kê đơn thuốc.
              </p>
            </Section>

            <Section title="2. Trách nhiệm sử dụng AI">
              <ul className="list-disc pl-5 space-y-1">
                <li>Người dùng cần hiểu rằng AI chỉ đưa ra các thông tin tham khảo, không mang tính chất tư vấn y tế chuyên sâu.</li>
                <li>Không sử dụng AI để yêu cầu chẩn đoán bệnh, kê đơn, điều trị y tế hay nội dung trái pháp luật.</li>
                <li>Nghiêm cấm hành vi lạm dụng AI để tạo nội dung sai lệch, phản cảm hoặc gây tổn hại cho cá nhân, tổ chức khác.</li>
              </ul>
            </Section>

            <Section title="3. Giới hạn của AI và cảnh báo sử dụng">
              <p>
                Nội dung trả lời từ AI được tạo bởi mô hình ngôn ngữ tự động, có thể không chính xác, không cập nhật hoặc không phù hợp với từng trường hợp cụ thể. TalkToDoc không chịu trách nhiệm nếu người dùng sử dụng câu trả lời của AI làm căn cứ điều trị hoặc ra quyết định y tế quan trọng.
              </p>
            </Section>

            <Section title="4. Quy định xử lý vi phạm">
              <ul className="list-disc pl-5 space-y-1">
                <li>TalkToDoc có quyền theo dõi và kiểm tra nội dung tương tác với AI để đảm bảo không vi phạm chính sách.</li>
                <li>Trong trường hợp phát hiện hành vi lạm dụng AI, hệ thống có thể tạm khóa tính năng hoặc tài khoản liên quan mà không cần báo trước.</li>
              </ul>
            </Section>

            <Section title="5. Thu thập & lưu trữ tương tác với AI">
              <p>
                Các cuộc hội thoại với AI có thể được ghi log để cải thiện chất lượng dịch vụ, huấn luyện mô hình, hoặc xử lý vi phạm. Mọi thông tin thu thập đều tuân thủ Chính sách bảo mật đã công bố ở trên.
              </p>
            </Section>
          </Section>
          <Section title="12. Chính sách thanh toán và hoàn tiền">
            <Section title="1. Phương thức thanh toán">
              <ul className="list-disc pl-5 space-y-1">
                <li>Người dùng có thể thanh toán qua <strong>ví TalkToDoc</strong> hoặc cổng <strong>VNPay</strong>.</li>
                <li>Số tiền thanh toán sẽ được khấu trừ trực tiếp từ số dư ví hoặc chuyển hướng sang trang VNPay để xử lý.</li>
                <li>Mọi giao dịch thanh toán đều được mã hóa và bảo vệ theo chuẩn an toàn cao.</li>
              </ul>
            </Section>

            <Section title="2. Chính sách hoàn tiền">
              <ul className="list-disc pl-5 space-y-1">
                <li>Trong trường hợp bác sĩ <strong>từ chối lịch hẹn</strong> hoặc lịch bị <strong>hủy do lỗi hệ thống</strong>, số tiền sẽ được hoàn <strong>trực tiếp vào ví TalkToDoc của người dùng</strong>.</li>
                <li>Hệ thống gửi thông báo ngay sau khi hoàn tiền thành công.</li>
                <li>Thời gian hoàn tiền có thể mất tối đa 1 giờ kể từ khi xác nhận hủy thành công.</li>
              </ul>
            </Section>

            <Section title="3. Không áp dụng rút tiền khỏi ví">
              <p>
                Vì lý do pháp lý, <strong>người dùng không thể rút tiền từ ví TalkToDoc</strong>. Số dư ví chỉ được sử dụng để đặt lịch khám mới hoặc thanh toán các dịch vụ khác trên nền tảng.
              </p>
            </Section>

            <Section title="4. Trường hợp đặc biệt">
              <p>
                Nếu có lỗi trong quá trình thanh toán hoặc hoàn tiền, người dùng có thể liên hệ bộ phận hỗ trợ qua email hoặc hotline. Hệ thống sẽ kiểm tra và xử lý trong vòng 24–48 giờ làm việc.
              </p>
            </Section>
          </Section>
          <h1 className="text-3xl font-bold">- Điều khoản đăng ký làm bác sĩ</h1>
          <section id="terms-of-sign-up-doctor" className="terms-of-service-section pt-0 pb-0">
            <p>
              Khi đăng ký làm bác sĩ tại nền tảng TalkToDoc, bạn đồng ý tuân thủ các yêu cầu và quy định sau:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Phải cung cấp thông tin chính xác bao gồm họ tên, chuyên môn, giấy phép hành nghề và kinh nghiệm làm việc.</li>
              <li>Cam kết bảo mật thông tin bệnh nhân và tuân thủ quy định bảo mật dữ liệu cá nhân theo pháp luật Việt Nam.</li>
              <li>Không được sử dụng nền tảng để đưa ra chẩn đoán hoặc kê toa không có căn cứ.</li>
              <li>Phải phản hồi bệnh nhân trong thời gian hợp lý và chuyên nghiệp.</li>
              <li>TalkToDoc có quyền xác minh thông tin bác sĩ, từ chối hoặc huỷ tư cách thành viên nếu có hành vi gian lận hoặc vi phạm đạo đức nghề nghiệp.</li>
            </ul>
            <p className="mt-2">
              TalkToDoc luôn hoan nghênh các bác sĩ có chuyên môn, đạo đức và tinh thần phục vụ cộng đồng. Tham gia cùng chúng tôi để mang lại dịch vụ chăm sóc sức khỏe chất lượng, nhanh chóng và hiệu quả đến với mọi người dân.
            </p>
          </section>
          <h1 className="text-3xl font-bold mb-6">- Điều khoản sử dụng</h1>
          <section id="terms-of-service" className="terms-of-service-section pt-0">
            <p>
              Khi sử dụng website và dịch vụ của TalkToDoc, bạn đồng ý tuân thủ các điều khoản sau đây. Vui lòng đọc kỹ trước khi sử dụng.
            </p>

            <h3 className="mt-4 font-semibold">1. Sử dụng hợp pháp</h3>
            <p>
              Bạn chỉ được sử dụng dịch vụ vào các mục đích hợp pháp. Không được sử dụng để đăng tải nội dung giả mạo, xúc phạm, lừa đảo hoặc vi phạm pháp luật Việt Nam.
            </p>

            <h3 className="mt-4 font-semibold">2. Tài khoản người dùng</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Phải cung cấp thông tin chính xác và đầy đủ khi đăng ký.</li>
              <li>Chịu trách nhiệm bảo mật tài khoản, mật khẩu và mọi hoạt động dưới tài khoản của mình.</li>
              <li>Không được chia sẻ, chuyển nhượng tài khoản cho người khác.</li>
            </ul>

            <h3 className="mt-4 font-semibold">3. Trách nhiệm của người dùng</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Không can thiệp vào hệ thống hoặc làm gián đoạn dịch vụ.</li>
              <li>Không thu thập thông tin của người khác trái phép.</li>
              <li>Tôn trọng nhân viên và bác sĩ trong quá trình sử dụng dịch vụ.</li>
            </ul>

            <h3 className="mt-4 font-semibold">4. Quyền của TalkToDoc</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Có quyền khóa tài khoản vi phạm mà không cần báo trước.</li>
              <li>Có quyền cập nhật, chỉnh sửa, tạm ngưng hoặc ngừng dịch vụ bất kỳ lúc nào.</li>
              <li>Không chịu trách nhiệm nếu bạn sử dụng sai mục đích hoặc cung cấp thông tin không đúng.</li>
            </ul>

            <h3 className="mt-4 font-semibold">5. Giới hạn trách nhiệm</h3>
            <p>
              TalkToDoc cung cấp dịch vụ theo hiện trạng, không cam kết tuyệt đối về tính chính xác của nội dung từ bác sĩ. Mọi quyết định y tế nên có sự tham khảo ý kiến chuyên môn trực tiếp.
            </p>

            <h3 className="mt-4 font-semibold">6. Thay đổi điều khoản</h3>
            <p>
              Chúng tôi có quyền cập nhật điều khoản mà không cần thông báo trước. Việc bạn tiếp tục sử dụng dịch vụ sau khi có thay đổi đồng nghĩa với việc bạn đồng ý với các điều khoản mới.
            </p>
          </section>

        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mt-6">{title}</h2>
      <div className="mt-2 text-base leading-relaxed">{children}</div>
    </div>
  );
}