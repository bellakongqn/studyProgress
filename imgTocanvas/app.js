console.log('%c app is running!!! ','color:#fff;background:lightblue')

;(function() {
    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')
    const downloadButton = document.querySelector('#download')

    console.log(ctx)

    const fileInput = document.querySelector('input[type="file"]');

    console.log(fileInput)

    fileInput.addEventListener('change', function(e) {
        const files = fileInput.files;
        const imageFile = files[0];


        // ctx.drawImage(imageFile, 0, 0)

        const fileReader = new FileReader();
        const image = new Image();


        fileReader.addEventListener('load', (e) => {

            const imageUrl = fileReader.result;

            // console.log(imageUrl)

            image.addEventListener('load', () => {

                // 已经拿到了image

                // 开始绘制

                ctx.drawImage(image, 0, 0, 250, 150);

                ctx.fillStyle = 'pink';
                ctx.font = '48px serif';
                ctx.fillText('Bella', 60, 100)
            })


            image.src = imageUrl;
        })

        fileReader.readAsDataURL(imageFile);


    })



    downloadButton.onclick = () => {
        // const imgData = ctx.getImageData(0,0,250, 150);

        // const blob = new Blob([imgData], { type: 'image/jpeg' });

        // const url = URL.createObjectURL(blob);

        // window.open(url)

        var a = document.createElement('a')
        document.body.appendChild(a)
        a.style='display:none'

        canvas.toBlob(bb => {
            const url = URL.createObjectURL(bb, 'image/jpeg', 1);
            console.log(url)
            a.href = url;
            a.download = 'dog'
            a.click()
            // window.open(url)
        })
    }



})()