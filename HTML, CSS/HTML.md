# HTML

## HTML 태그 사용하기
`<TagName>` Contents `</TagName>`

## Head and More Tags
`<head></head>` 
- 페이지에 대한 설정
- 안에 있는 속성들은 브라우저 화면에 보여지지 않는다

`<meta></meta>`
- 부가적인 정보

## Semantic HTML
- Non-Semantic : 의미가 없는 태그
  - `div` 가장 통용적인 Container, 코드만 보고 어떤 의미인지 파악하기 어렵다
  - `span` 짧은 text를 위한 태그
  - `p` 긴 text를 위한 태그
  
- **Semantic** : 코드만 보고 의미를 파악할 수 있는 태그
  - `header`, `main`, `footer`, `nav` 등등
  
```
컴퓨터가 이해할 땐 똑같지만 사람이 볼 때는 직관적으로 이해하기 쉬운 Semantic이 좋다.
되도록이면 Semantic tag를 쓰자!
```

# Tags

### `form`
- action
  - 어떤 페이지로 data를 보낼 것인지 지정
  - URL에 해당하는 파일이 반드시 존재해야 한다.
- method
  - 2가지 방식, POST 와 GET
  - `POST` : 백엔드 서버에 정보를 전송하는 방식
  - `GET`: 보안에 취약. URL에 보내는 정보들이 포함됨. 

