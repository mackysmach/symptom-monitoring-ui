import { Inter } from 'next/font/google'
import './globals.css'
import "bootstrap/dist/css/bootstrap.css";
import Head from 'next/head';
import Navbar_basic from './componenets/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Symptoms Monitoring',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">

        <body className={inter.className}>
          <main className="h-screen flex flex-col justify-center items-center">
            <Navbar_basic />
            <div className='container' style={{ marginTop: '60px' }} >
              {children}
            </div>
          </main>
        </body>
    </html>
  )
}



//// มีตัวอย่างรูปทั่ได้ให้ดู
/// มีหน้าคู่มือการถ่ายรูปและการใช้แอป
/// เตือนทุกๆชั่วโมง OCR ทำช่องมารับ
/// config เวลาเช้ากลางวันเย็นได้เฉพาะแต่ละรายการ
/// แจ้งเตือนล่วงหน้าในกรณีทุกๆชั่วโมง
/// ประวัติการใช้ยาของสัตว์แต่ละตัว
////ใช้กล้องจากหลายจากหลายโทรศัพท์หลายความละเอียด แสงมากแสงน้อย

/// ลบaccount ได้ถ้าทัน??