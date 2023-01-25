케라스->Tensorflowjs(h5 > json)

pyenv 설치 => 내부에 3.6.8버전 적용

pip install tensorflowjs (3.6.8완벽 동작, 3.8 이하 동작) 설치

tensorflowjs_converter --input_format=keras ./model/iris_model.h5 ./model/

tensorflowjs_converter --input_format=tfjs_layers_model ./model/model.json ./model/exit.h5
