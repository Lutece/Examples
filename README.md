# Step by step

1. [Node 설치](https://nodejs.org/ko/download/package-manager/)
- window와 mac은 인스톨러가 있어 인스톨러를 다운로드 후 설치해주세요.

2. Node 설치 확인
```bash
$ node -v
```

3. node_module 설치
```bash
$ npm i
```

4. express 서버 동작 확인
```bash
$ node serve.js
```

5. AMD
```bash
{
    "presets": ["env"],
    "plugins": ["transform-es2015-modules-amd"]
}
```