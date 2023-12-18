rm -rf ../generated

mkdir -p ../generated

protoc -I=../proto \
--js_out=import_style=commonjs:../generated/ \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:../generated/ \
../proto/evaluation.proto

# Copy generated files to react-sdk/src
rm -rf ../../react-sdk/src/generated
cp -r ../generated ../../react-sdk/src