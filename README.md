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

### dmuz
* 유튜브에서 'stevie wonder mv'로 검색하면 나오는 짧은동영상(기본값) 3(기본값)개를 다운로드 받고 mp3로 변환하여 아이튠즈에 추가해주며 첫곡은 변환되자 마자 플레이해준다.

```bash
./dmuz stevie wonder mv
```

### dmuz_detail
* 유튜브에서 'beatles mv'로 검색하면 나오는 짧은동영상 2개를 다운로드 받고 mp3로 변환하여 아이튠즈에 추가해주며 첫곡은 변환되자 마자 플레이해준다.
```bash 
./dmuz_detail short 2 beatles mv
```

### search_itunes
* itunes에서 'beatles'가 들어간 노래를 찾아서 재생목록으로 만들어 주고 플레이 한다.
```
./search_itunes.js "beatles" true
```

### 다운로드된 리소스들
* mp3 : 오디오

```bash
find tmp -name '*.mp4' -type f
```
* mp4 : 비디오

```bash
find tmp -name '*.mp3' -type f
```
