const blogTitleField = document.querySelector('.headline');
const articleField = document.querySelector('.text');

const bannerImage = document.querySelector('#banner_upload');
const banner = document.querySelector('.upload_image');
let bannerPath;

const publishBtn = document.querySelector('.btn_publish');
const uploadInput = document.querySelector('#btn_post');

bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner");
})

uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image");
})

const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if (file && file.type.includes("image")) {
        const formdata = new FormData();
        formdata.append('image', file);

        fetch('/upload', {
                method: 'post',
                body: formdata
            }).then(res => res.json())
            .then(data => {
                if (uploadType == "image") {
                    addImage(data, file.name);
                } else {
                    bannerPath = `${data}`;
                    banner.style.backgroundImage = `url("${bannerPath}")`;
                }
                
            })
    } else {
        alert("upload image only");
    }
}

const addImage = (imagepath, alt) => {
    let curPos = articleField.selectionStart;
    let texttoinsert = `\r![${alt}](${imagepath})\r`;
    articleField.value = articleField.value.slice(0, curPos) + texttoinsert + articleField.value.slice(curPos);
}
