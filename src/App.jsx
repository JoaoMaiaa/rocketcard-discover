import { useState, Fragment, useEffect } from 'react'
import api from './services/api'
import man from './assets/images/man.jpg'

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    let { data } = await api.get()
    setUser(data)
  }

  return (
    <Fragment>
      <div className="container p-4">
        <div className="columns">
          <div className="column is-4">
            <div className="card">
              <div className="card-header">
                <div className="card-header-title">
                  <div className="logo is-flex ">
                    <svg width="55" height="67" viewBox="0 0 55 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M53.8486 1.66054L45.1547 0.381045C44.8974 0.329865 44.6402 0.432219 44.5373 0.534579L40.8334 5.34548C40.5762 5.65256 40.5248 6.062 40.6276 6.42026C40.7305 6.77852 40.4219 7.08561 40.0618 7.03443L37.0266 6.36908C36.5636 6.26672 36.0492 6.42027 35.7405 6.82971L23.7028 22.1837C23.497 22.4907 23.0855 22.5931 22.7254 22.4396L18.1469 20.3924C17.7353 20.1876 17.2724 20.2388 16.9123 20.4947L14.5973 22.0813C14.2372 22.3372 13.7228 22.3884 13.3112 22.1837L12.1795 21.6207C11.4593 21.2624 10.5847 21.6719 10.379 22.4396L9.55586 26.0733C9.35009 26.9434 9.71019 27.8134 10.4818 28.2741L12.2309 29.3488L17.8382 32.7779L20.5647 34.4668C21.3364 34.9274 22.3138 34.8251 22.9826 34.2621L27.561 30.2701C27.9211 29.963 28.487 29.8606 28.8986 30.1165L30.2875 30.8331C30.7505 31.089 31.3164 30.9866 31.6765 30.6283L33.9915 28.4788C34.3516 28.1205 34.9174 28.0693 35.329 28.2741L38.7757 29.8606C39.2901 30.1165 39.9074 29.963 40.2675 29.5024L41.8623 27.4552L53.9515 12.05C54.5173 11.3335 54.1572 10.2588 53.2313 10.054L50.5562 9.43987C49.9903 9.33751 49.7331 8.62099 50.1447 8.21156L54.3116 3.04239C54.7231 2.42823 54.4659 1.7629 53.8486 1.66054ZM13.9797 32.6756C13.7224 32.522 13.4652 32.7779 13.5681 33.0338L14.8542 36.4117C14.9571 36.6676 14.9571 36.9235 14.9056 37.1794L13.7739 41.5808C13.7224 41.8879 13.8253 42.195 14.0311 42.3485L17.272 44.8563C17.5807 45.0611 17.9922 45.0611 18.2494 44.8052L21.6447 41.8367C21.8505 41.6832 22.1077 41.5808 22.3135 41.5297L26.1717 41.1202C26.4289 41.069 26.5318 40.7108 26.2746 40.5572L13.9797 32.6756ZM12.0765 43.9351C12.3338 43.8328 12.6424 43.8839 12.8482 44.0375L16.3463 46.6988C16.5007 46.8524 16.6036 47.0571 16.6036 47.313L16.2949 51.2027C16.2435 51.4074 16.192 51.5609 16.0377 51.7145L0.964776 66.7613C0.861889 66.9149 0.656111 66.7613 0.758998 66.6078L4.92591 59.8009C4.97736 59.7497 4.92591 59.6473 4.87447 59.5961H4.72014L3.38261 60.1079C3.27973 60.1079 3.22829 60.0568 3.17684 60.0056V59.9032L8.98994 45.6241C9.09282 45.4705 9.19572 45.317 9.35005 45.2658L12.0765 43.9351Z" fill="#8257E6" />
                    </svg>
                    <p class="is-flex is-align-items-center">João Maia</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="card-image">
                  <figure className="image is-flex is-justify-content-end">
                    <img src={man} alt="" className="img-fluid" />
                  </figure>
                </div>
                <div className="notification position-absolute is-black">
                  <ul>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                  </ul>
                </div>
                <div className="card-footer">
                  <div className="has-text-uppercase">Rocketcard</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
