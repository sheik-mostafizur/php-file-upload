class QuickFileUp {
  constructor(startUp = true) {
    this.startUp = startUp;
    this.init();
  }

  init() {
    const style = document.createElement("style");

    style.textContent = `
      .quick_file_up {
        position: fixed;
        right: 16px;
        top: 16px;
        z-index: 9999;
      }
      .quick_file_up .quick_file_up__handler {
        cursor: pointer;
        height: 40px;
        width: 40px;
        overflow: hidden;
        transform: translateY(0);
        animation: up_down_cloud 2s infinite;
      }
      .quick_file_up .quick_file_up__handler svg {
        width: 100%;
        object-fit: contain;
      }
      @keyframes up_down_cloud {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(6px);
        }
        100% {
          transform: translateY(0);
        }
      }

      .quick_file_up_area {
        width: 0px;
        height: 0px;
        visibility: hidden;

        position: fixed;
        right: 16px;
        top: 16px;
        background: #fcfcfc;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .quick_file_up_area.active {
        width: 430px;
        height: auto;
        visibility: unset;
      }
      .quick_file_up_area .quick_file_up__handler-close {
        cursor: pointer;
        text-align: right;
        width: 16px;
        padding: 8px;
        margin-left: auto;
        margin-bottom: -20px;
        margin-right: 20px;
        transform: translateY(20px);
      }

      .quick_file_up .quick_file_up__header {
        color: #6990f2;
        font-size: 20px;
        font-weight: 600;
        padding: 1rem;
        border-bottom: 1px solid #eee;
      }

      .quick_file_up .quick_file_up__form {
        height: 167px;
        display: flex;
        cursor: pointer;
        margin: 30px 0;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 5px;
        border: 2px dashed #6990f2;
      }
      .quick_file_up .quick_file_up__text {
        margin-top: 15px;
        font-size: 16px;
      }

      .quick_file_up__progress-area .progress-area__row,
      .quick_file_up__uploaded-area .uploaded-area__row {
        margin-bottom: 10px;
        background: #e9f0ff;
        list-style: none;
        padding: 15px 20px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .quick_file_up__progress-area
        .progress-area__row
        .progress-area__content {
        width: 100%;
        margin-left: 15px;
      }
      .quick_file_up__progress-area
        .progress-area__row
        .progress-area__details {
        display: flex;
        align-items: center;
        margin-bottom: 7px;
        justify-content: space-between;
      }
      .quick_file_up__progress-area
        .progress-area__row
        .progress-area__details
        span {
        font-size: 14px;
      }
      .quick_file_up__progress-area
        .progress-area__content
        .progress-area__progress-bar {
        height: 6px;
        width: 100%;
        margin-bottom: 4px;
        background: #fff;
        border-radius: 30px;
      }
      .quick_file_up__progress-area
        .progress-area__content
        .progress-area__progress-bar
        .progress-area__progress {
        height: 100%;
        width: 0%;
        background: #6990f2;
        border-radius: inherit;
      }
      .quick_file_up__progress-area
        .progress-area__row
        .progress-area__content
        .progress-area__progress-bar
        .progress-area__progress {
        height: 100%;
        width: 0%;
        background: #6990f2;
        border-radius: inherit;
      }

      .quick_file_up__uploaded-area {
        max-height: 232px;
        overflow-y: scroll;
        padding: 20px;
      }
      .quick_file_up__uploaded-area.onprogress {
        max-height: 150px;
      }
      .quick_file_up__uploaded-area::-webkit-scrollbar {
        width: 0px;
      }
      .quick_file_up__uploaded-area
        .uploaded-area__row
        .uploaded-area__content {
        display: flex;
        align-items: center;
      }
      .quick_file_up__uploaded-area
        .uploaded-area__row
        .uploaded-area__details {
        display: flex;
        margin-left: 15px;
        flex-direction: column;
      }
      .quick_file_up__uploaded-area
        .uploaded-area__row
        .uploaded-area__details
        .uploaded-area__size {
        color: #404040;
        font-size: 11px;
      }`;

    document.head.appendChild(style);
    this.main();
    this.quickFileMain();
  }

  main() {
    const div = document.createElement("div");
    div.classList.add("quick_file_up");
    div.innerHTML = `
    <div class="quick_file_up">
      <div class="quick_file_up__handler">
        <!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg
          fill="#6990F1"
          viewBox="0 -64 640 640"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"
          ></path>
        </svg>
      </div>
      <div class="quick_file_up_area">
        <div class="quick_file_up__handler-close">
          <svg
            fill="#252525"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <polygon
                    points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 "
                  ></polygon>
                </g>
              </g>
            </g>
          </svg>
        </div>

        <header class="quick_file_up__header">FILE UPLOAD SERVICE</header>
        <section class="quick_file_up__progress-area"></section>
        <section class="quick_file_up__uploaded-area"></section>
      </div>
    </div>
`;

    document.body.appendChild(div);
  }

  quickFileMain() {
    const quickFileUpElements = {
      handler: document.querySelector(".quick_file_up .quick_file_up__handler"),
      main_area: document.querySelector(".quick_file_up .quick_file_up_area"),
      main_areaClose: document.querySelector(
        ".quick_file_up .quick_file_up__handler-close"
      ),
      form: document.querySelector(".quick_file_up__form"),
      input_file: document.querySelector(".quick_file_up__input"),
      progress: document.querySelector(
        ".quick_file_up .quick_file_up__progress-area"
      ),
      upload: document.querySelector(
        ".quick_file_up .quick_file_up__uploaded-area"
      ),
    };

    // start Handle show and hide area
    quickFileUpElements.handler.addEventListener("click", function () {
      quickFileUpElements.main_area.classList.add("active");
    });
    quickFileUpElements.main_areaClose.addEventListener("click", function () {
      quickFileUpElements.main_area.classList.remove("active");
    });
    // end Handle show and hide area

    quickFileUpElements.input_file.click();

    quickFileUpElements.input_file.onchange = ({ target }) => {
      let file = target.files[0]; //getting file [0] this means if user has selected multiple files then get first one only
      if (file) {
        let fileName = file.name; //getting file name
        if (fileName.length >= 12) {
          //if file name length is greater than 12 then split it and add ...
          let splitName = fileName.split(".");
          fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
        }
        quickFileUploadFile(fileName); //calling uploadFile with passing file name as an argument
      }
    };
    // file upload function
    function quickFileUploadFile(name) {
      let xhr = new XMLHttpRequest(); //creating new xhr object (AJAX)
      xhr.open("POST", "php/upload.php"); //sending post request to the specified URL
      xhr.upload.addEventListener("progress", ({ loaded, total }) => {
        //file uploading progress event
        let fileLoaded = Math.floor((loaded / total) * 100); //getting percentage of loaded file size
        let fileTotal = Math.floor(total / 1000); //gettting total file size in KB from bytes
        let fileSize;
        // if file size is less than 1024 then add only KB else convert this KB into MB
        fileTotal < 1024
          ? (fileSize = fileTotal + " KB")
          : (fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB");
        let progressHTML = `<li class="progress-area__row">
                    <div>
                      <svg
                        fill="#6990F1"
                        width="30px"
                        height="30px"
                        viewBox="0 0 1920 1920"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g fill-rule="evenodd">
                            <path
                              d="M1185.471 0v564.706h564.705V1920H169V0h1016.471Zm-225.77 1355.294H507.823v113.054h451.878v-113.054Zm338.711-225.881H507.823v112.94h790.589v-112.94Zm-112.941-225.884H507.823v112.941h677.648V903.529Zm225.882-225.882h-903.53v112.941h903.53V677.647ZM959.701 451.878H507.823v112.941h451.878V451.878Z"
                            ></path>
                            <path
                              d="M1667.673 345.623c30.38 30.268 51.84 66.635 65.619 106.164h-434.937V16.851c39.53 13.779 75.897 35.35 106.278 65.619l263.04 263.153Z"
                            ></path>
                          </g>
                        </g>
                    </svg>
                  </div>
                    <div class="progress-area__content">
                      <div class="progress-area__details">
                        <span class="progress-area__name">${name} • Uploading</span>
                        <span class="progress-area__percent">${fileLoaded}%</span>
                      </div>
                      <div class="progress-area__progress-bar">
                        <div class="progress-area__progress" style="width: ${fileLoaded}%"></div>
                      </div>
                    </div>
                  </li>`;
        // uploadedArea.innerHTML = ""; //uncomment this line if you don't want to show upload history
        quickFileUpElements.upload.classList.add("onprogress");
        quickFileUpElements.progress.innerHTML = progressHTML;
        if (loaded == total) {
          quickFileUpElements.progress.innerHTML = "";
          let uploadedHTML = `<li class="uploaded-area__row">
                      <div class="uploaded-area__content upload">
                      <div>
                        <svg
                          fill="#6990F1"
                          width="30px"
                          height="30px"
                          viewBox="0 0 1920 1920"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g fill-rule="evenodd">
                              <path
                                d="M1185.471 0v564.706h564.705V1920H169V0h1016.471Zm-225.77 1355.294H507.823v113.054h451.878v-113.054Zm338.711-225.881H507.823v112.94h790.589v-112.94Zm-112.941-225.884H507.823v112.941h677.648V903.529Zm225.882-225.882h-903.53v112.941h903.53V677.647ZM959.701 451.878H507.823v112.941h451.878V451.878Z"
                              ></path>
                              <path
                                d="M1667.673 345.623c30.38 30.268 51.84 66.635 65.619 106.164h-434.937V16.851c39.53 13.779 75.897 35.35 106.278 65.619l263.04 263.153Z"
                              ></path>
                            </g>
                          </g>
                      </svg>
                    </div>
                        <div class="uploaded-area__details">
                          <span class="uploaded-area__name">${name} • Uploaded</span>
                          <span class="uploaded-area__size">${fileSize}</span>
                        </div>
                      </div>
                      <div>
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g id="Interface / Check">
                              <path
                                id="Vector"
                                d="M6 12L10.2426 16.2426L18.727 7.75732"
                                stroke="#6990F1"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </li>`;
          quickFileUpElements.upload.classList.remove("onprogress");
          // quickFileUpElements.upload.innerHTML = uploadedHTML; //uncomment this line if you don't want to show upload history
          quickFileUpElements.upload.insertAdjacentHTML(
            "afterbegin",
            uploadedHTML
          ); //remove this line if you don't want to show upload history
        }
      });
      let data = new FormData(quickFileUpElements.form); //FormData is an object to easily send form data
      xhr.send(data); //sending form data
    }
  }
}

// Call main function
window.onload = function () {
  new QuickFileUp();
};
