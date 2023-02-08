// 파일 업로드
var fs = require("fs");
var request = require("request");

var drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

// 파일 업로드 함수
function uploadFile(filepath, callback) {
  // 이미지 파일 읽어오기
  fs.readFile(filepath, function (err, data) {
    // 업로드 하기
    drive.files.create(
      {
        resource: {
          name: "Image.png",
          mimeType: "image/png",
        },
        media: {
          mimeType: "image/png",
          body: data,
        },
      },
      function (err, file) {
        if (err) {
          callback(err);
        } else {
          callback(null, file);
        }
      }
    );
  });
}

// 파일 업로드
uploadFile("image.png", function (err, file) {
  // 분석 함수 실행
  analyzeImage(file.data.id);
});

// 이미지 분석하기
function analyzeImage(imageId) {
  request.post(
    {
      url: "https://vision.googleapis.com/v1/images:annotate?key=" + API_KEY,
      json: {
        requests: [
          {
            image: {
              source: {
                imageUri: "https://drive.google.com/uc?id=" + imageId,
              },
            },
            features: [
              {
                type: "LABEL_DETECTION",
              },
            ],
          },
        ],
      },
    },
    function (err, response, body) {
      if (err) console.log(err);
      else console.log(body);
    }
  );
}
