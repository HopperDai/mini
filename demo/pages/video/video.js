// pages/video/video.js
Page({
  data: {
    photoUrl: ''
  },
  take() {
    let cc = wx.createCameraContext(this);
    console.log(cc);

    // 拍照
    cc.takePhoto({
      success: (res) => {
        console.log('拍照成功', res);
        this.setData({
          photoUrl: res.tempImagePath
        });

        // 上传到服务器。
        wx.uploadFile({
          url: 'http://localhost:8080/uploadphoto',
          filePath: res.tempImagePath,
          name: 'photo',
          success() {
            console.log('上传成功')
          },
          fail(err) {
            console.log('上传失败', err);
          }
        })
      },
      fail(err) {
        console.log('拍照失败', err);
      }
    });

    // // 录像
    // cc.startRecord({
    //   success(res) {
    //     console.log('录像成功', res);
    //   },
    //   fail(err) {
    //     console.log('录像失败', err);
    //   }
    // })

  }
})