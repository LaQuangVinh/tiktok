import Header from '../component/Header'
export default function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  )
}
