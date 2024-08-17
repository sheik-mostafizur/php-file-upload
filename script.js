class QuickFileUp {
  constructor({
    form = null,
    input = null,
    isInputHidden = false,
    parentForInputHidden = null,
  } = {}) {
    this.form = form;
    this.input = input;
    this.isInputHidden = isInputHidden;
    this.parentForInputHidden = parentForInputHidden;
    this.init();
  }

  init() {
    if (this.form || this.input) {
      if (!document.querySelector(".quick_file_up")) {
        this.main();
      }
      this.quickFileMain();
    }
  }

  main() {
    const div = document.createElement("div");
    div.classList.add("quick_file_up");
    div.innerHTML = `
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
        <div style="padding: 20px">
          <section class="quick_file_up__progress-area">
            <li class="progress-area__row">
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
                  <span class="progress-area__name">cloud.gif • Uploading</span>
                  <span class="progress-area__percent">25%</span>
                </div>
                <div class="progress-area__progress-bar">
                  <div class="progress-area__progress" style="width: 25%"></div>
                </div>
              </div>
            </li>
            <li class="progress-area__row">
                <div style="cursor:pointer">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.0002 5C9.47649 5 5.00024 9.4775 5.00024 15C5.00024 20.5225 9.47649 25 15.0002 25C20.524 25 25.0002 20.5225 25.0002 15C25.0002 9.4775 20.524 5 15.0002 5ZM19.634 17.8663C19.8684 18.1006 20.0001 18.4185 20.0001 18.75C20.0001 19.0815 19.8684 19.3994 19.634 19.6338C19.3996 19.8681 19.0817 19.9998 18.7502 19.9998C18.4188 19.9998 18.1009 19.8681 17.8665 19.6338L15.0002 16.7675L12.134 19.6338C12.0182 19.7502 11.8805 19.8427 11.7288 19.9057C11.5771 19.9688 11.4145 20.0013 11.2502 20.0013C11.086 20.0013 10.9233 19.9688 10.7717 19.9057C10.62 19.8427 10.4823 19.7502 10.3665 19.6338C10.2503 19.5178 10.1581 19.38 10.0953 19.2284C10.0324 19.0767 9.99999 18.9142 9.99999 18.75C9.99999 18.5858 10.0324 18.4233 10.0953 18.2716C10.1581 18.12 10.2503 17.9822 10.3665 17.8663L13.2327 15L10.3665 12.1338C10.1321 11.8994 10.0004 11.5815 10.0004 11.25C10.0004 10.9185 10.1321 10.6006 10.3665 10.3663C10.6009 10.1319 10.9188 10.0002 11.2502 10.0002C11.5817 10.0002 11.8996 10.1319 12.134 10.3663L15.0002 13.2325L17.8665 10.3663C18.1009 10.1319 18.4188 10.0002 18.7502 10.0002C19.0817 10.0002 19.3996 10.1319 19.634 10.3663C19.8684 10.6006 20.0001 10.9185 20.0001 11.25C20.0001 11.5815 19.8684 11.8994 19.634 12.1338L16.7677 15L19.634 17.8663Z" fill="#DD302F"/>
  </svg>
              </div>
              <div class="progress-area__content">
                <div class="progress-area__details">
                  <span class="progress-area__name">cloud.gif • Uploading</span>
                  <span class="progress-area__percent">25%</span>
                </div>
                <div class="progress-area__progress-bar">
                  <div class="progress-area__progress" style="width: 25%"></div>
                </div>
              </div>
            </li>
          </section>
          <section class="quick_file_up__uploaded-area">
            <li class="uploaded-area__row">
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
                  <span class="uploaded-area__name">index.html • Uploaded</span>
                  <span class="uploaded-area__size">12 KB</span>
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
            </li>
            <li class="uploaded-area__row failed">
              <div class="uploaded-area__content upload">
                <div>
                  <svg
                    fill="#DD302F"
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
                  <span class="uploaded-area__name">index.html • Failed</span>
                  <span class="uploaded-area__size">12 KB</span>
                </div>
              </div>
              <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.2 3.5C11.1294 3.86688 10.9722 4.17045 10.8 4.5C10.499 4.43575 10.2562 4.32952 9.9812 4.19375C9.09525 3.83596 8.00303 3.86284 7.09995 4.15625C6.10385 4.59091 5.49943 5.24243 4.99995 6.2C4.86985 6.54073 4.80159 6.82045 4.79409 7.18477C4.77305 7.53128 4.7423 7.78188 4.59995 8.1C4.26071 8.33301 3.92006 8.48384 3.54292 8.64336C3.08985 8.85029 2.85266 9.07822 2.59995 9.5C2.53885 9.59475 2.53885 9.59475 2.47651 9.69141C2.06188 10.4497 2.07053 11.3726 2.273 12.1977C2.57781 13.0213 3.05986 13.5059 3.79136 13.9703C4.57142 14.2981 5.42012 14.3296 6.25605 14.3259C6.40482 14.3264 6.40482 14.3264 6.55659 14.3269C6.88069 14.3278 7.20476 14.3272 7.52886 14.3266C7.75606 14.3267 7.98326 14.3269 8.21046 14.3271C8.68502 14.3274 9.15957 14.327 9.63413 14.3261C10.2408 14.3249 10.8475 14.3256 11.4542 14.3268C11.9228 14.3275 12.3913 14.3273 12.8599 14.3268C13.0836 14.3266 13.3072 14.3268 13.5309 14.3273C13.8438 14.3278 14.1568 14.327 14.4697 14.3259C14.5611 14.3263 14.6524 14.3267 14.7465 14.3271C15.6443 14.3212 16.5031 14.2088 17.1999 13.6C17.8018 12.8219 17.8751 12.1776 17.7999 11.2C17.6366 10.5723 17.2273 10.1578 16.6999 9.8C16.4254 9.66295 16.4254 9.66295 16.1999 9.6C16.3643 9.43107 16.5314 9.26474 16.6999 9.1C16.7639 9.03606 16.8278 8.97213 16.8937 8.90625C17.0999 8.8 17.0999 8.8 17.3839 8.86523C18.0491 9.14891 18.5431 9.80825 18.8562 10.45C19.1464 11.2938 19.1816 12.481 18.8374 13.3125C18.7249 13.5125 18.7249 13.5125 18.5999 13.7C18.5587 13.7681 18.5174 13.8361 18.4749 13.9062C17.9857 14.6401 17.254 15.1778 16.3999 15.4C16.0128 15.4301 15.6267 15.4294 15.2385 15.4291C15.1222 15.4297 15.0059 15.4304 14.886 15.4311C14.5017 15.433 14.1174 15.4334 13.7332 15.4336C13.5331 15.4341 13.333 15.4346 13.1329 15.4351C12.5038 15.4367 11.8746 15.4372 11.2454 15.4371C10.5988 15.4369 9.95215 15.439 9.3055 15.4422C8.74845 15.4448 8.1914 15.4459 7.63434 15.4458C7.30248 15.4457 6.97065 15.4465 6.63878 15.4484C6.26785 15.4504 5.89699 15.4498 5.52605 15.4486C5.36368 15.4503 5.36368 15.4503 5.19803 15.452C4.00658 15.4422 2.98517 15.0286 2.1062 14.2223C1.13582 13.1996 0.942282 12.0342 0.965966 10.6852C1.01332 9.67008 1.50651 8.82352 2.19995 8.1C2.62904 7.71332 3.03198 7.44199 3.59995 7.3C3.60208 7.2126 3.60208 7.2126 3.60425 7.12344C3.67718 5.86978 4.22425 4.88406 5.09995 4C6.79989 2.54368 9.29074 2.30802 11.2 3.5Z" fill="#DD302F"/>
  <path d="M16.2298 3.54726C16.8488 4.03944 17.247 4.72232 17.4001 5.49999C17.4983 6.40262 17.2948 7.26394 16.7314 7.9875C16.2265 8.51909 15.5187 8.88023 14.8001 9C13.6872 9.01142 12.9032 8.7852 12.1001 8C11.5241 7.24363 11.291 6.44747 11.4001 5.49999C11.5777 4.7367 11.8929 4.10622 12.5001 3.59999C13.7192 2.84677 14.9892 2.75186 16.2298 3.54726ZM13.3001 4.59999C13.1516 4.79799 13.1516 4.79799 13.0001 4.99999C13.3301 5.32999 13.6601 5.65999 14.0001 5.99999C13.864 6.15778 13.864 6.15778 13.7251 6.31875C13.4772 6.60777 13.2358 6.90085 13.0001 7.2C13.1321 7.299 13.2641 7.398 13.4001 7.5C13.7301 7.17 14.0601 6.84 14.4001 6.5C14.5053 6.59075 14.6105 6.6815 14.7189 6.775C15.0079 7.0229 15.301 7.26431 15.6001 7.5C15.6991 7.434 15.7981 7.368 15.9001 7.3C15.7244 6.89334 15.4638 6.66679 15.1364 6.37812C15.0001 6.2 15.0001 6.19999 15.004 6.00468C15.1289 5.73859 15.2939 5.57734 15.5064 5.37499C15.5797 5.30435 15.6531 5.23371 15.7286 5.16093C15.7852 5.10782 15.8418 5.05471 15.9001 4.99999C15.8341 4.90099 15.7681 4.80199 15.7001 4.69999C15.3786 4.84084 15.1679 5.01034 14.9251 5.26249C14.8638 5.32566 14.8024 5.38882 14.7392 5.4539C14.6933 5.50211 14.6474 5.55032 14.6001 5.59999C14.255 5.45266 14.0394 5.25762 13.7814 4.98749C13.6559 4.85672 13.5293 4.72709 13.4001 4.59999C13.3671 4.59999 13.3341 4.59999 13.3001 4.59999Z" fill="#DD302F"/>
  </svg>
              </div>
            </li>
          </section>
        </div>
      </div>
`;

    document.body.prepend(div);
  }

  quickFileMain() {
    const quickFileUpElements = {
      handler: document.querySelector(".quick_file_up .quick_file_up__handler"),
      main_area: document.querySelector(".quick_file_up .quick_file_up_area"),
      main_areaClose: document.querySelector(
        ".quick_file_up .quick_file_up__handler-close"
      ),
      form: document.querySelector(this.form),
      parentForInputHidden: document.querySelector(this.parentForInputHidden),
      input_file: document.querySelector(this.input),
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

    if (this.isInputHidden) {
      quickFileUpElements.parentForInputHidden.addEventListener(
        "click",
        function () {
          quickFileUpElements.input_file.click();
        }
      );
    } else {
      quickFileUpElements.input_file.click();
    }

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
  // Example 1
  new QuickFileUp({
    form: ".quick_file_up__form",
    input: ".quick_file_up__input",
  });

  // Example 2
  const config = {
    form: ".another",
    input: ".another_input",
    isInputHidden: true,
    parentForInputHidden: ".hidden_area",
  };
  new QuickFileUp(config);
};
