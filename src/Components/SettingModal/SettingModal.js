import React from 'react'

const SettingModal = () => {
  return (
    <div className="modal fade" id="SettingsModal" tabIndex="-1">
        <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Setting</h5>
            </div>
            <div className="modal-body custom_scroll">
              <div className="setting-font">
                <small className="card-title text-muted">
                  Google font Settings
                </small>
                <ul className="list-group font_setting mb-3 mt-1">
                  <li className="list-group-item py-1 px-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="font"
                        id="font-opensans"
                        value="font-opensans"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="font-opensans"
                      >
                        Open Sans Google Font
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item py-1 px-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="font"
                        id="font-quicksand"
                        value="font-quicksand"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="font-quicksand"
                      >
                        Quicksand Google Font
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item py-1 px-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="font"
                        id="font-nunito"
                        value="font-nunito"
                      />
                      <label className="form-check-label" htmlFor="font-nunito">
                        Nunito Google Font
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item py-1 px-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="font"
                        id="font-Raleway"
                        value="font-raleway"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="font-Raleway"
                      >
                        Raleway Google Font
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="setting-theme">
                <small className="card-title text-muted">
                  Theme Color Settings
                </small>
                <ul className="list-unstyled d-flex justify-content-between choose-skin mb-2 mt-1">
                  <li data-theme="indigo">
                    <div className="indigo"></div>
                  </li>
                  <li data-theme="blue" className="active">
                    <div className="blue"></div>
                  </li>
                  <li data-theme="cyan">
                    <div className="cyan"></div>
                  </li>
                  <li data-theme="green">
                    <div className="green"></div>
                  </li>
                  <li data-theme="orange">
                    <div className="orange"></div>
                  </li>
                  <li data-theme="blush">
                    <div className="blush"></div>
                  </li>
                  <li data-theme="red">
                    <div className="red"></div>
                  </li>
                  <li data-theme="dynamic">
                    <div className="dynamic">
                      <i className="fa fa-paint-brush"></i>
                    </div>
                  </li>
                </ul>
                <div className="form-check form-switch gradient-switch mb-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="CheckGradient"
                  />
                  <label className="form-check-label" htmlFor="CheckGradient">
                    Enable Gradient! ( Sidebar )
                  </label>
                </div>
              </div>

              <div className="setting-img mb-3">
                <div className="form-check form-switch imagebg-switch mb-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="CheckImage"
                  />
                  <label className="form-check-label" htmlFor="CheckImage">
                    Set Background Image (Sidebar)
                  </label>
                </div>
                <div className="bg-images">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li className="sidebar-img-1 sidebar-img-active">
                      <a className="rounded sidebar-img" id="img-1" href="#">
                        <img
                          src="dashboardAssets/assets/images/sidebar-bg/sidebar-1.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="sidebar-img-2">
                      <a className="rounded sidebar-img" id="img-2" href="#">
                        <img
                          src="dashboardAssets/assets/images/sidebar-bg/sidebar-2.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="sidebar-img-3">
                      <a className="rounded sidebar-img" id="img-3" href="#">
                        <img
                          src="dashboardAssets/assets/images/sidebar-bg/sidebar-3.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="sidebar-img-4">
                      <a className="rounded sidebar-img" id="img-4" href="#">
                        <img
                          src="dashboardAssets/assets/images/sidebar-bg/sidebar-4.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="sidebar-img-5">
                      <a className="rounded sidebar-img" id="img-5" href="#">
                        <img
                          src="dashboardAssets/assets/images/sidebar-bg/sidebar-5.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="dt-setting">
                <small className="card-title text-muted">
                  Dynamic Color Settings
                </small>
                <ul className="list-group list-unstyled mb-3 mt-1">
                  <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                    <label>Primary Color</label>
                    <button
                      id="primaryColorPicker"
                      className="btn bg-primary avatar xs border-0 rounded-0"
                    ></button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                    <label>Secondary Color</label>
                    <button
                      id="secondaryColorPicker"
                      className="btn bg-secondary avatar xs border-0 rounded-0"
                    ></button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                    <label className="text-muted small">Chart Color 1</label>
                    <button
                      id="chartColorPicker1"
                      className="btn chart-color1 avatar xs border-0 rounded-0"
                    ></button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                    <label className="text-muted small">Chart Color 2</label>
                    <button
                      id="chartColorPicker2"
                      className="btn chart-color2 avatar xs border-0 rounded-0"
                    ></button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                    <label className="text-muted small">Chart Color 3</label>
                    <button
                      id="chartColorPicker3"
                      className="btn chart-color3 avatar xs border-0 rounded-0"
                    ></button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                    <label className="text-muted small">Chart Color 4</label>
                    <button
                      id="chartColorPicker4"
                      className="btn chart-color4 avatar xs border-0 rounded-0"
                    ></button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                    <label className="text-muted small">Chart Color 5</label>
                    <button
                      id="chartColorPicker5"
                      className="btn chart-color5 avatar xs border-0 rounded-0"
                    ></button>
                  </li>
                </ul>
              </div>

              <div className="setting-mode">
                <small className="card-title text-muted">
                  Light/Dark & Contrast Layout
                </small>
                <ul className="list-group list-unstyled mb-0 mt-1">
                  <li className="list-group-item d-flex align-items-center py-1 px-2">
                    <div className="form-check form-switch theme-switch mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="theme-switch"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="theme-switch"
                      >
                        Enable Dark Mode!
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center py-1 px-2">
                    <div className="form-check form-switch theme-high-contrast mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="theme-high-contrast"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="theme-high-contrast"
                      >
                        Enable High Contrast
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center py-1 px-2">
                    <div className="form-check form-switch theme-rtl mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="theme-rtl"
                      />
                      <label className="form-check-label" htmlFor="theme-rtl">
                        Enable RTL Mode!
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer justify-content-start">
              <button type="button" className="btn btn-primary btn-lg lift">
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-warning btn-lg border lift"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SettingModal