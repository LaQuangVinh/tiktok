import style from './header.module.scss'
import clsx from 'clsx'
import { logoTiktok, iconSearch } from '../../../../assets/img'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap'

export default function Header() {
  const classContainerWrap = clsx(style.content)
  const classCol = clsx('d-flex', 'flex-wrap', 'align-content-center')
  const classRow = clsx('h-100')
  const classColSearch = clsx(style.search, 'd-flex')
  const classBtnSeach = clsx(style.btn_search, 'btn')
  const classSpinner = clsx(style.spinner, 'spinner-border', 'spinner-border-sm', 'text-muted')
  const classClear = clsx(style.clear)

  return (
    <Container className={classContainerWrap}>
      <Row className={classRow}>
        <Col xxl={3} className={classCol}>
          <div>
            <img width="118px" height="42px" src={logoTiktok} alt="Tiktok" />
          </div>
        </Col>
        <Col xxl={9} className={classCol}>
          <Container>
            <Row>
              <Col xxl={{ span: 5, offset: 2 }} className={classColSearch}>
                <input className="h-100" placeholder="Search" spellCheck={false} />
                <button className={classClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <span className={classSpinner}></span>
                <button className={classBtnSeach}>
                  <svg
                    className={style.changecolor}
                    width="24"
                    data-e2e=""
                    height="24"
                    viewBox="0 0 48 48"
                    fill="rgba(0, 0, 0, .4)"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                    />
                  </svg>
                </button>
              </Col>
              <Col xxl={{ span: 3, offset: 2 }} className="bg-secondary">
                <div>search</div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

// const className = clsx(style.content, 'container')
// const classSearch = clsx(style.search, 'd-flex', 'flex-wrap', 'align-content-center', 'bg-success')
// <header className="container-fluid border-bottom">
//   <div className={className}>
//     <div className="row h-100">
//       <div className="col-xxl-3 bg-warning d-flex flex-wrap align-content-center">
//         <img width="118px" height="42px" src={logoTiktok} alt="Tiktok" />
//       </div>
//       <div className="col-xxl-9 d-flex flex-wrap align-content-center justify-content-between">
//         <div></div>
//         <div className={classSearch}>
//           <input className="h-100" />
//           <button>
//             <FontAwesomeIcon icon={faCircleXmark} />
//           </button>
//           <span className="spinner spinner-border spinner-border-sm text-muted"></span>
//           <button type="button" className="btn">
//             <img src={iconSearch} alt="Search" />
//           </button>
//         </div>
//         <div></div>
//         <div className="bg-success">box</div>
//       </div>
//     </div>
//   </div>
// </header>
