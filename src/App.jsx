import { useState, Fragment, useEffect } from 'react'
import api from './services/api'
// import man from './assets/images/man.jpg'

function App() {
  const [user, setUser] = useState([])
  const [number, setNumber] = useState(0)

  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    let { data } = await api.get()
    setUser(data)
  }

  let element = document.querySelector('.border');
  switch (number) {
    case 1:
      element.classList.add('is-link')
      element.classList.remove('is-light')
      break;
    case 2:
      element.classList.add('is-success')
      element.classList.remove('is-link')
      break;
    case 3:
      element.classList.add('is-danger')
      element.classList.remove('is-success')
      break;
    case 4:
      element.classList.add('is-grey')
      element.classList.remove('is-danger')
      break;
    case false:
      element.classList.add('is-light')
      element.classList.remove('is-grey')
      break;
    case false:
      number == 0
      break;
  }

  function backButton() {
    setNumber(number + 1)
    if (number == 4) {
      setNumber(number == 0)
      return
    }
  }

  return (
    <Fragment>
      <div className="container p-4">
        <div className="columns">
          <div className="column is-4">
            <div className="border">
              {
                <div className="card">
                  <div className="card-header">
                    <div className="card-header-title">
                      <div className="logo is-flex">
                        <svg className="svg" height="30" width="30" viewBox="0 0 55 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M53.8486 1.66054L45.1547 0.381045C44.8974 0.329865 44.6402 0.432219 44.5373 0.534579L40.8334 5.34548C40.5762 5.65256 40.5248 6.062 40.6276 6.42026C40.7305 6.77852 40.4219 7.08561 40.0618 7.03443L37.0266 6.36908C36.5636 6.26672 36.0492 6.42027 35.7405 6.82971L23.7028 22.1837C23.497 22.4907 23.0855 22.5931 22.7254 22.4396L18.1469 20.3924C17.7353 20.1876 17.2724 20.2388 16.9123 20.4947L14.5973 22.0813C14.2372 22.3372 13.7228 22.3884 13.3112 22.1837L12.1795 21.6207C11.4593 21.2624 10.5847 21.6719 10.379 22.4396L9.55586 26.0733C9.35009 26.9434 9.71019 27.8134 10.4818 28.2741L12.2309 29.3488L17.8382 32.7779L20.5647 34.4668C21.3364 34.9274 22.3138 34.8251 22.9826 34.2621L27.561 30.2701C27.9211 29.963 28.487 29.8606 28.8986 30.1165L30.2875 30.8331C30.7505 31.089 31.3164 30.9866 31.6765 30.6283L33.9915 28.4788C34.3516 28.1205 34.9174 28.0693 35.329 28.2741L38.7757 29.8606C39.2901 30.1165 39.9074 29.963 40.2675 29.5024L41.8623 27.4552L53.9515 12.05C54.5173 11.3335 54.1572 10.2588 53.2313 10.054L50.5562 9.43987C49.9903 9.33751 49.7331 8.62099 50.1447 8.21156L54.3116 3.04239C54.7231 2.42823 54.4659 1.7629 53.8486 1.66054ZM13.9797 32.6756C13.7224 32.522 13.4652 32.7779 13.5681 33.0338L14.8542 36.4117C14.9571 36.6676 14.9571 36.9235 14.9056 37.1794L13.7739 41.5808C13.7224 41.8879 13.8253 42.195 14.0311 42.3485L17.272 44.8563C17.5807 45.0611 17.9922 45.0611 18.2494 44.8052L21.6447 41.8367C21.8505 41.6832 22.1077 41.5808 22.3135 41.5297L26.1717 41.1202C26.4289 41.069 26.5318 40.7108 26.2746 40.5572L13.9797 32.6756ZM12.0765 43.9351C12.3338 43.8328 12.6424 43.8839 12.8482 44.0375L16.3463 46.6988C16.5007 46.8524 16.6036 47.0571 16.6036 47.313L16.2949 51.2027C16.2435 51.4074 16.192 51.5609 16.0377 51.7145L0.964776 66.7613C0.861889 66.9149 0.656111 66.7613 0.758998 66.6078L4.92591 59.8009C4.97736 59.7497 4.92591 59.6473 4.87447 59.5961H4.72014L3.38261 60.1079C3.27973 60.1079 3.22829 60.0568 3.17684 60.0056V59.9032L8.98994 45.6241C9.09282 45.4705 9.19572 45.317 9.35005 45.2658L12.0765 43.9351Z" fill="#8257E6" />
                        </svg>
                        <p class="ml-4 is-flex is-align-items-center has-text-light">{user.login}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-image">
                      <figure className="image is-flex is-justify-content-center">
                        <img src={user.avatar_url} alt="" className="img-fluid" />
                      </figure>
                    </div>
                    <div className="notification mt-5 is-black">
                      <ul>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="#FFF"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
                          <span className="ml-2">Empresa {user.company}</span>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true" fill="#FFF" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
                            <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                          </svg>
                          <span className="ml-2">{user.followers} seguidores</span>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true" fill="#FFF" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
                            <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                          </svg>
                          <span className="ml-2">{user.following} seguindo</span>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" fill="#FFF" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                          <span className="ml-2">{user.location}</span>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true" fill="#fff" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo UnderlineNav-octicon hide-sm">
                            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                          </svg>
                          <span className="ml-2">{user.public_repos} repositórios</span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <div className="is-flex ml-auto">
                        <svg className="mr-2" width="25" height="37" viewBox="0 0 55 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M53.8486 1.66054L45.1547 0.381045C44.8974 0.329865 44.6402 0.432219 44.5373 0.534579L40.8334 5.34548C40.5762 5.65256 40.5248 6.062 40.6276 6.42026C40.7305 6.77852 40.4219 7.08561 40.0618 7.03443L37.0266 6.36908C36.5636 6.26672 36.0492 6.42027 35.7405 6.82971L23.7028 22.1837C23.497 22.4907 23.0855 22.5931 22.7254 22.4396L18.1469 20.3924C17.7353 20.1876 17.2724 20.2388 16.9123 20.4947L14.5973 22.0813C14.2372 22.3372 13.7228 22.3884 13.3112 22.1837L12.1795 21.6207C11.4593 21.2624 10.5847 21.6719 10.379 22.4396L9.55586 26.0733C9.35009 26.9434 9.71019 27.8134 10.4818 28.2741L12.2309 29.3488L17.8382 32.7779L20.5647 34.4668C21.3364 34.9274 22.3138 34.8251 22.9826 34.2621L27.561 30.2701C27.9211 29.963 28.487 29.8606 28.8986 30.1165L30.2875 30.8331C30.7505 31.089 31.3164 30.9866 31.6765 30.6283L33.9915 28.4788C34.3516 28.1205 34.9174 28.0693 35.329 28.2741L38.7757 29.8606C39.2901 30.1165 39.9074 29.963 40.2675 29.5024L41.8623 27.4552L53.9515 12.05C54.5173 11.3335 54.1572 10.2588 53.2313 10.054L50.5562 9.43987C49.9903 9.33751 49.7331 8.62099 50.1447 8.21156L54.3116 3.04239C54.7231 2.42823 54.4659 1.7629 53.8486 1.66054ZM13.9797 32.6756C13.7224 32.522 13.4652 32.7779 13.5681 33.0338L14.8542 36.4117C14.9571 36.6676 14.9571 36.9235 14.9056 37.1794L13.7739 41.5808C13.7224 41.8879 13.8253 42.195 14.0311 42.3485L17.272 44.8563C17.5807 45.0611 17.9922 45.0611 18.2494 44.8052L21.6447 41.8367C21.8505 41.6832 22.1077 41.5808 22.3135 41.5297L26.1717 41.1202C26.4289 41.069 26.5318 40.7108 26.2746 40.5572L13.9797 32.6756ZM12.0765 43.9351C12.3338 43.8328 12.6424 43.8839 12.8482 44.0375L16.3463 46.6988C16.5007 46.8524 16.6036 47.0571 16.6036 47.313L16.2949 51.2027C16.2435 51.4074 16.192 51.5609 16.0377 51.7145L0.964776 66.7613C0.861889 66.9149 0.656111 66.7613 0.758998 66.6078L4.92591 59.8009C4.97736 59.7497 4.92591 59.6473 4.87447 59.5961H4.72014L3.38261 60.1079C3.27973 60.1079 3.22829 60.0568 3.17684 60.0056V59.9032L8.98994 45.6241C9.09282 45.4705 9.19572 45.317 9.35005 45.2658L12.0765 43.9351Z" fill="#8257E6" />
                        </svg>
                        <div className="is-flex has-text-light is-align-items-center is-uppercase">Rocketcard</div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
          <div className="column is-flex is-align-items-center is-justify-content-center">
            <div className="has-text-centered">
              <div className="has-text-light is-size-3">Customizar Rocketcard</div>
              <div onClick={() => backButton()} className="button is-dark mt-5">Gerar background</div>
            </div>
          </div>
        </div>
        <div className="footer has-text-centered">
          Feito por <a className="has-text-grey-light" href={user.html_url}>João Maia</a>
        </div>
      </div>
    </Fragment>
  )
}

export default App
