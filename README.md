### [Youtube 링크로 작동 영상보기](https://www.youtube.com/watch?v=I5kK-EbbMz)
[![Youtube](https://i.ytimg.com/vi/I5kK-EbbMzk/hqdefault.jpg)](https://www.youtube.com/watch?v=I5kK-EbbMzk)

### 요구사항

* OSX
* itunes

### 설치

* 설치 커맨드

```bash
./install
```

* 그이후 api_youtube.js 파일을 열어 key변수를 각자 개인의 Youtube API 키로 변경

### dmuz

* 유튜브에서 'stevie wonder mv'로 검색하면 나오는 모든동영상(기본값)중 관련성 높은  3개를 다운로드 받고 mp3로 변환하여 아이튠즈에 추가해주며 플레이해준다.

```bash
./dmuz 3 stevie wonder mv
```

### dmuz_detail

* 유튜브에서 'beatles mv'로 검색하면 나오는 짧은동영상 2개를 다운로드 받고 mp3로 변환하여 아이튠즈에 추가해주며 플레이해준다.

```bash 
./dmuz_detail short 2 beatles mv
```

### search_itunes

* itunes에서 검색해서 플레이리스트 만들어주고 플레이한다

```
# 두번째 옵션은 어떤 방식으로 검색할껀지 결정
./smuz [or|and|fuzzy] pattern_word_1 pattern_word_2
```

### 다운로드된 리소스들

* 오디오

```bash
find tmp -name '*.mp3' -type f
```

* 비디오

```bash
find tmp/webm -name '*' -type f
```

* youtube data
```bash
find tmp/ag -name '*' -type f
```

### TODO
* 아이튠에서 삭제하기(완전히 삭제)
* 유튜브 다운받고 변환할때 사운드 조정해서 비슷한 크기로 만들기
* 기존에 다운받아놓은거 사운드 크기 맞추기
* 불륨 컨트롤
* itunes 비쥬얼 이퀄라이져
* 커맨드 정리
* Radio

### reference
* http://alvinalexander.com/apple/itunes-applescript-examples-scripts-mac-reference
