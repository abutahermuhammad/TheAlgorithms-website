import NavigationBar from "src/components/NavigationBar";
import "./global.css";
import Footer from "@/components/footer";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavigationBar />
      <main>
        {children}
      </main>
      <Footer />
    </ >
  )
}
