const iconFile = `<div>
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
        </div>`;

const iconCheck = `<div>
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
        </div>`;

function quickFileMain() {
  const quickFileUpElements = {
    form: document.querySelector(".quick_file_up .quick_file_up__form"),
    input_file: document.querySelector(".quick_file_up .quick_file_up__input"),
    progress: document.querySelector(
      ".quick_file_up .quick_file_up__progress-area"
    ),
    upload: document.querySelector(
      ".quick_file_up .quick_file_up__uploaded-area"
    ),
  };

  quickFileUpElements.form.addEventListener("click", function () {
    quickFileUpElements.input_file.click();
  });

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
                    ${iconFile}
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
                        ${iconFile}
                        <div class="uploaded-area__details">
                          <span class="uploaded-area__name">${name} • Uploaded</span>
                          <span class="uploaded-area__size">${fileSize}</span>
                        </div>
                      </div>
                      ${iconCheck}
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

window.onload = function () {
  quickFileMain();
};
