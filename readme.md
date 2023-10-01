## New Tezskin 은...

[깃허브 페이지](https://pages.github.com/) 를 개인 블로그로 활용하고 있다. 최근에 [Tailwind](https://tailwindcss.com/) 와 같은 Atomic CSS 에 잠시나마 관심을 가지게 되어 이 참에 블로그 테마를 다시 만들어볼 마음을 먹게 되었다.

최종적으로는 Atomic CSS 를 적용하지는 않았다. Html 파일이 너무 지저분해지는 것과 오히려 더 복잡해지는 Class 이름 때문인데, 어쨌든 새롭게 Github Page 테마를 만드는 즐거운 시간을 보낼 수 있었다.

## 적용 Library 및 Framework

깃허브 페이지의 기본 SSG(Static Site Generator) 인 [Jekyll](https://jekyllrb-ko.github.io/) 을 사용하였다. 기본 코드 하이라이터인 Rouge 가 맘에 안들어서 [Prism](https://prismjs.com/) 을 써보았다.

참고로 Rouge 작동이 안되도록 하려면 _config.yml 파일에 아래와 같은 구문을 삽입해야 한다.

```yaml
markdown: kramdown
kramdown:
  syntax_highlighter_opts:
    disable: true
```
{:.yaml}

서체는 [나눔 스퀘어 네오](https://campaign.naver.com/nanumsquare_neo/)를 바탕으로 [Hack](https://sourcefoundry.org/hack/) 폰트를 코드 표현 용도로 적용했다. 아이콘은 [Bootstrap 아이콘](https://icons.getbootstrap.com/)을 사용했다. 이들 모두 [Jsdelivr](https://www.jsdelivr.com/) 에서 찾을 수 있었다.