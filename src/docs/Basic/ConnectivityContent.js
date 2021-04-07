export const text1_1 = `
# 네트워킹

많은 모바일 어플리케이션들은 원격 URL로부터 리소스를 가져와야합니다. REST API에 POST 요청을 할 수도 있고, 다른 서버로부터 정적 콘텐츠 그룹(chunk)을 가져와야할 수도 있습니다.

## Fetch 사용하기[#](https://reactnative.dev/docs/network#using-fetch)

React Native는 네트워킹 요구에 맞는 [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)를 제공합니다. \`XMLHttpRequest\` 또는 다른 네트워킹 API를 사용해본 적이 있다면 Fetch에 익숙할 것입니다. 자세한 정보는 [Fetch 사용](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)에 관한 MDN 가이드를 참고하세요. 

### 요청하기[#](https://reactnative.dev/docs/network#making-requests)
임의의 URL에서 컨텐츠를 가져오려면, \`fetch()\` 에 URL을 전달합니다. 

\`\`\`jsx
fetch('https://mywebsite.com/mydata.json');
\`\`\`

Fetch는 HTTP 요청을 커스터마이징할 수 있도록 두 번째 인자도 옵션으로 받습니다. 두 번째 인자를 통해 추가 헤더를 지정하거나, POST 요청을 할 수 있습니다. 

\`\`\`jsx
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue'
  })
});
\`\`\`

전체 속성 목록을 보려면  [Fetch 요청 문서](https://developer.mozilla.org/en-US/docs/Web/API/Request)를 확인해 보세요. 

### 응답 처리하기[#](https://reactnative.dev/docs/network#handling-the-response)
위 예제에서는 요청하는 방법을 보여주었습니다. 대부분의 경우, 응답과 관련된 작업도 필요할 것입니다. 

네트워킹은 본질적으로 비동기 작업입니다. Fetch 메소드는 비동 방식으로 작동하는 코드를 간단하게 작성할 수 있는 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 객체를 반환합니다. 

\`\`\`jsx
const getMoviesFromApi = () => {
  return fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((json) => {
      return json.movies;
    })
    .catch((error) => {
      console.error(error);
    });
};
\`\`\`

React Native 어플리케이션에서 \`async\` / \`await\` 키워드를 사용할 수도 있습니다. 

\`\`\`jsx
const getMoviesFromApiAsync = async () => {
//async function getMoviesFromApiAsync () {
  try {
    let response = await fetch(
      'https://reactnative.dev/movies.json'
    );
    let json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};
\`\`\`

fetch에서 던지는 에러를 catch하지 않으면 자동으로 삭제된다는 것을 잊지 마세요. 

**Fectch 예시**
**함수형 컴포넌트 (toggle 1)**

\`\`\`jsx
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  );
};
\`\`\`

**클래스형 컴포넌트 (toggle 2)**

\`\`\`jsx
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
      </View>
    );
  }
};
\`\`\`

> 기본적으로 iOS는 [SSL](https://hosting.review/web-hosting-glossary/#12)을 사용해 암호화되지 않은 모든 요청을 차단합니다. \`http\`로 시작하는 일반 텍스트 URL에서 가져와야하는 경우, 먼저 [App Transport Security 예외를 추가](https://reactnative.dev/docs/integration-with-existing-apps#test-your-integration)해야 합니다. 접근할 도메인을 알고 있는 경우, 해당 도메인에 대해서만 예외를 추가하는 것이 더 안전합니다. 런타임까지 도메인을 알 수 없는 경우 [ATS를 완전히 비활성화](https://reactnative.dev/docs/integration-with-existing-apps#app-transport-security)할 수 있습니다. 그러나 2017년 1월부터 [애플 앱스토어 검토에서는 ATS 비활성화에 대한 합당한 근거를 요구](https://forums.developer.apple.com/thread/48979)합니다. 자세한 내용은 [Apple 문서](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33)를 참고하세요. 

> API 레벨 28의 Android에서는, 클리어 텍스트 트래픽도 기본적으로 차단됩니다. 이 동작은 앱 매니페스트 파일에서 [\` android:usesCleartextTraffic\`](https://developer.android.com/guide/topics/manifest/application-element#usesCleartextTraffic)를 설정하여 재정의할 수 있습니다. 

### 다른 네트워킹 라이브러리 사용하기[#](https://reactnative.dev/docs/network#using-other-networking-libraries)
[XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)는 React Native에 내장되어있습니다. 따라서 [frisbee](https://github.com/niftylettuce/frisbee), [axios](https://github.com/mzabriskie/axios) 등 [XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)에 의존하는 서드 파티 라이브러리를 사용할 수 있고, 필요한 경우 XMLHttpRequest API를 직접 사용할 수도 있습니다. 

\`\`\`jsx
var request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    console.log('success', request.responseText);
  } else {
    console.warn('error');
  }
};

request.open('GET', 'https://mywebsite.com/endpoint/');
request.send();
\`\`\`

> 네이티브 앱에는 CORS 개념이 없기 때문에, XMLHttpRequest의 보안 모델은 웹과 다릅니다. 

## 웹 소켓 지원[#](https://reactnative.dev/docs/network#websocket-support)
React Native는 단일 TCP 연결을 통해 전이중 통신 채널(full-duplex communication channels)을 제공하는  [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) 프로토콜도 지원합니다. 

\`\`\`jsx
var ws = new WebSocket('ws://host.com/path');

ws.onopen = () => {
  // connection opened
  ws.send('something'); // send a message
};

ws.onmessage = (e) => {
  // a message was received
  console.log(e.data);
};

ws.onerror = (e) => {
  // an error occurred
  console.log(e.message);
};

ws.onclose = (e) => {
  // connection closed
  console.log(e.code, e.reason);
};
\`\`\`

## \`fetch\` 및 쿠키 기반 인증에 관한 알려진 문제 [#](https://reactnative.dev/docs/network#known-issues-with-fetch-and-cookie-based-authentication) 

The following options are currently not working with \`fetch\`

다음 옵션들은 현재 \`fetch\`에서 작동하지 않습니다.  

- \`redirect:manual\`
- \`credentials:omit\`

- Android에서 동일한 헤더를 사용하면 최신 헤더만 표시됩니다. 임시 해결책은 [https://github.com/facebook/react-native/issues/18837#issuecomment-398779994](https://github.com/facebook/react-native/issues/18837#issuecomment-398779994) 에서 찾을 수 있습니다. 

- 쿠기 기반 인증은 현재 불안정합니다. [https://github.com/facebook/react-native/issues/23185](https://github.com/facebook/react-native/issues/23185) 에서 일부 이슈를 확인할 수 있습니다. 

- 적어도 iOS에서는, 302를 통해 리다이렉션할 때 \`Set-Cookie\` 헤더가 보인다면 해당 쿠키는 제대로 설정되어 있지 않은 것입니다. 리다이렉션이 수동으로 처리될 수 없기 때문에, 만료된 세션인 경우 무한 요청이 발생할 수 있습니다.
`

export const text2_1 = `
# 보안

앱을 빌드할 때 보안이 간과되는 경우가 많습니다. 완전히 뚫을 수 없는 소프트웨어를 구축하는 것은 불가능한 것이 사실입니다. (완전히 뚫을 수 없는 자물쇠는 아직 발명되지 않았습니다. 은행 금고에도 여전히 침입이 가능합니다.) 그러나, 악의적인 공격의 피해자가 되거나 보안 취약성에 노출 될 가능성은, 그러한 상황에서 애플리케이션을 보호하기 위해 투입하는 노력에 반비례합니다. 평범한 자물쇠도 풀 수는 있지만, 캐비닛 고리만큼 빨리 풀기는 어렵습니다. 

![https://reactnative.dev/docs/assets/d_security_chart.svg](https://reactnative.dev/docs/assets/d_security_chart.svg)

이 가이드에서는 민감한 정보를 저장하는 것, 인증, 네트워크 보안, 그리고 앱을 안전하게 하는 데 도움이 되는 도구들에 대해 알아볼 것입니다. 이는 비행 전 체크리스트가 아니라, 앱과 유저를 더 안전하게 보호하는 데 도움이 되는 옵션 카탈로그이입니다. 

## 민감한 정보 저장하기[#](https://reactnative.dev/docs/security#storing-sensitive-info)
어플리케이션 코드 안에 민감한 API 키를 절대 저장하면 안 됩니다. 코드에 포함된 모든 것은, 앱 번들을 검토하는 사람이 일반 텍스트(plain text)로 접근 가능하기 때문입니다. [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv) 및 [react-native-config](https://github.com/luggit/react-native-config/) 같은 도구는 API 엔드포인트와 같은 환경변수들을 추가하는 데 적합하지만, secret이나 API 키를 포함할 수도 있는 서버 측 환경변수와 혼동해서는 안 됩니다. 

앱의 일부 리소스에 접근할 때 API 키나 secret이 반드시 필요하다면, 가장 안전한 방법은 앱과 리소스 간에 오케스트레이션(orchestration) 계층을 구축하는 것입니다. 이는 필요한 API 키나 secret으로 요청할 수 있는 서버리스 함수일 수 있습니다. 서버 측 코드의 보안은 어플리케이션 코드의 보안과 같은 방식으로 API 소비자가 액세스할 수 없습니다. 

**For persisted user data, choose the right type of storage based on its sensitivity.** As your app is used, you’ll often find the need to save data on the device, whether to support your app being used offline, cut down on network requests or save your user’s access token between sessions so they wouldn’t have to re-authenticate each time they use the app.

**유지되는 사용자 데이터의 경우, 데이터의 민감도에 따라 올바른 유형의 스토리지를 선택해야 합니다.** 앱 사용 시 기기에 데이터를 저장해야하는 경우가 있습니다. (앱의 오프라인 사용을 지원하거나, 네트워크 요청을 줄이거나, 세션 간에 사용자의 액세스 토큰을 저장해 앱을 사용할 때마다 인증을 다시 할 필요가 없도록 할 때 등)

> 지속형 vs 비지속형 - 지속형 데이터(유지되는 데이터)는 디바이스의 메모리에 기록됩니다. 데이터를 가져오기 위해 네트워크 요청을 다시 하거나 유저에게 재접속을 요청할 필요 없이, 어플리케이션 실행 시 앱에서 데이터를 읽을 수 있습니다. 그러나 이로 인해 데이터가 공격자의 접근에 더 취약해질 수 있습니다. 비지속형 데이터는 메모리에 기록되지 않으므로 접근할 데이터가 존재하지 않습니다!

### Async Storage[#](https://reactnative.dev/docs/security#async-storage)
[Async Storage](https://github.com/react-native-community/async-storage)는 비동기 방식의, 암호화되지 않은 key-value 저장을 제공하는 리액트 네이티브용 community-maintained 모듈입니다. Async storage는 앱 간에 공유되지 않습니다. 모든 앱에는 고유한 샌드박스 환경이 있으며 다른 앱의 데이터에 접근할 수 없습니다. 

**(여기에 테이블 삽입)**

#### Developer Notes[#](https://reactnative.dev/docs/security#developer-notes)

- **Web :** 리액트 네이티브의 Async Storage는 웹의 Local Storage와 동일합니다. 

### Secure Storage[#](https://reactnative.dev/docs/security#secure-storage)

React Native는 민감한 데이터를 저장하는 방법을 제공하지 않습니다. 그러나 안드로이드와 iOS 플랫폼의 기존 솔루션을 활용할 수 있습니다. 

#### iOS - 키체인 서비스[#](https://reactnative.dev/docs/security#ios---keychain-services)
[키체인 서비스](https://developer.apple.com/documentation/security/keychain_services)는 사용자에 대한 민감한 정보의 작은 chunck를 안전하게 저장할 수 있도록 해줍니다. 키체인 서비스는 인증서, 토큰, 암호 및 Async Storage에 속하지 않는 다른 민감한 정보들을 저장하기에 이상적인 장소입니다. 

#### Android - 보안 공유 환경 설정[#](https://reactnative.dev/docs/security#android---secure-shared-preferences) 
[Shared Preferences(공유 환경설정)](https://developer.android.com/reference/android/content/SharedPreferences)은 지속형 key-data 저장의 Android 버전입니다. **공유 환경 설정의 데이터는 기본적으로 암호화되지 않지만**, [암호화된 공유 환경 설정](https://developer.android.com/topic/security/data)은 Android용 공유 환경 설정 클래스를 래핑하고 키와 값을 자동으로 암호화합니다. 

#### Android - Keystore[#](https://reactnative.dev/docs/security#android---keystore)
[Android Keystore](https://developer.android.com/training/articles/keystore) 시스템을 사용하면, 디바이스에서 암호화 키를 추출하기 더 어렵게 만드는 컨테이너에 키를 저장할 수 있습니다. 

iOS 키체인 서비스나 안드로이드 보안 공유환경설정을 사용하기 위해서는, 직접 브리지를 작성하거나, 이를 래핑하고 통합 API를 제공하는 라이브러리를 사용해 위험을 감수할 수 있습니다. 

사용을 고려해볼만한 라이브러리들 : 

- [expo-secure-store](https://docs.expo.io/versions/latest/sdk/securestore/)
- [react-native-encrypted-storage](https://github.com/emeraldsanto/react-native-encrypted-storage) - iOS에서는 키 체인을, Android에서는 EncryptedSharedPreferences을 사용합니다. 

- [react-native-keychain](https://github.com/oblador/react-native-keychain)
- [react-native-sensitive-info](https://github.com/mCodex/react-native-sensitive-info) - iOS에서는 안전하지만, Android에서는 Android용 공유환경설정(기본적으로 안전하지 않음)을 사용합니다. 그러나 Android Keystore를 사용하는 브랜치도 있습니다. 
    - [redux-persist-sensitive-storage](https://github.com/CodingZeal/redux-persist-sensitive-storage) - Redux에 대한 react-native-sensitive-info를 래핑합니다. 

> **의도치 않게 민감한 정보를 저장하거나 노출하지 않도록 주의**하세요. (민감한 데이터를 redux state로 저장하거나, Async Storage에 전체 state tree를 유지하는 경우. 또는 사용자 토큰을 보내거나 개인 정보를 Sentry 또는 Crashlytics와 같은 어플리케이션 모니터링 서비스로 보내는 경우. )

## 인증 및 Deep Linking[#](https://reactnative.dev/docs/security#authentication-and-deep-linking)

![https://reactnative.dev/docs/assets/d_security_deep-linking.svg](https://reactnative.dev/docs/assets/d_security_deep-linking.svg)

모바일 앱에는 웹에는 존재하지 않는 취약점인 "딥 링크"가 존재합니다. 딥 링크는 외부 소스에서 네이티브 어플리케이션으로 데이터를 직접 보내는 방식입니다. 앱 스키마가 \`app\`이고, \`//\` 뒤에 오는 것들이 요청을 처리하는 데에 내부적으로 사용될 수 있는 경우, 딥 링크는 \`app://\` 형태입니다. 

예를 들어, 전자상거래 앱을 빌드하는 경우, 앱에 딥 링크를 하고 id가 1인 상품의 디테일 페이지를 열기 위해  \`app://products/1\` 를 사용할 수 있습니다. 웹에도 이러한 종류의 URL들이 있지만, 한 가지 큰 차이점이 있습니다. 

딥 링크는 안전하지 않으며 딥 링크로 민감한 정보를 전송해서는 안 된다. 

딥 링크가 안전하지 않은 이유는 URL 스키마를 등록하는 중앙화된 메소드가 없기 때문입니다. 애플리케이션 개발자는 iOS의 경우 Xcode에서 설정하거나 Android의 경우 intent를 추가해 대부분의 url 스키마를 사용할 수 있습니다. 

악성 어플리케이션이 동일한 스키마에 등록하고 링크에 담긴 데이터에 접근할 권한을 획득함으로써 딥 링크를 가로채는 것을 막을 수는 없습니다. \`app://products/1\` 와 같이 보내는 것은 해롭진 않지만, 토큰을 보내는 것은 보안 문제가 됩니다. 

운영체제가 링크를 열 때 선택할 수 있는 어플리케이션이 두 개 이상인 경우, Android는 모달 창을 띄워 사용자에게 어떤 어플리케이션으로 링크를 열지 선택하도록 요청합니다. 그러나 iOS에서는 운영체제가 사용자 대신 선택하므로, 사용자가 이를 인식하지 못합니다. Apple은 선입선출 원칙이 도입된 iOS 최신 버전(iOS 11)에서 이 문제를 해결하기 위한 조치를 취했습니다. 그러나 여전히 이러한 취약점은 다른 방식으로 악용될 수 있습니다. ([여기](https://blog.trendmicro.com/trendlabs-security-intelligence/ios-url-scheme-susceptible-to-hijacking/)에서 자세한 내용을 확인할 수 있습니다). 범용 링크를 사용하면 iOS에서 앱 내의 콘텐츠에 안전하게 연결할 수 있습니다. 

### OAuth2 및 리다이렉션[#](https://reactnative.dev/docs/security#oauth2-and-redirects)

OAuth2 인증 프로토콜은 가장 완벽하고 안전한 프로토콜이라는 자부심을 바탕으로, 최근 엄청난 인기를 끌고 있습니다. OpenID Connect 프로토콜도 OAuth2 인증 프로토콜을 기반으로 하고 있습니다. OAuth2에서, 사용자는 서드 파티를 통한 인증을 요청받습니다. 인증에 성공하면, JWT(JSON Web Token)으로 교환될 수 있는 확인 코드와 함께 요청한 애플리케이션으로 다시 리다이렉션됩니다. JWT는 웹에서 파티 사이에 정보를 안전하게 전송하기 위한 개방형 표준입니다. 

웹에서 리다이렉션 단계는, 웹 URL의 고유성이 보장되기 때문에 안전합니다. 그러나 앱에서는 그렇지 않습니다. 전에 언급했듯이, URL 스키마를 등록하는 중앙화된 메소드가 없기 때문입니다. 이러한 보안 문제를 해결하려면, PKCE 형식의 추가 검사가 필요합니다. 

"Pixy"로 발음되는 PKCE는 "Proof of Key Code Exchange"의 약자이고, OAuth 2 사양의 확장입니다. 여기에는 인증 및 토큰 교환 요청이 동일한 클라이언트에서 오는지 확인하는 추가 보안 계층이 추가됩니다. PKCE는 SHA 256 암호화 해시 알고리즘을 사용합니다. SHA 256 알고리즘은 모든 크기의 텍스트 또는 파일에 대해 고유한 "서명"을 생성하지만, 

- 입력 파일에 관계없이 항상 동일한 길이이고, 

- 동일한 입력에 대해 항상 동일한 결과를 생성하도록 보장하며, 

- 일방적입니다. (즉, 원래 입력을 확인하기 위해 리버스 엔지니어링할 수 없습니다. )


다음의 두 가지 값이 있습니다. 

- **code_verifier** - 클라이언트가 생성한 큰 임의의 문자열
- **code_challenge** - code_verifier의 SHA 256

초기 \`/authorize\` 요청 중에 클라이언트는 \`code_challenge\` 를 \`code_verifier\` 로 보낼 수도 있습니다. 인증 요청이 올바르게 반환되면 클라이언트는  \`code_challenge\` 를 생성하는 데 사용된 \`code_verifier\` 도 전송합니다. 그런 다음 IDP는 \`code_challenge\` 를 계산하고, 첫 번째 \`/authorize\` 요청에 설정된 것과 일치하는지 확인하고 값이 일치하는 경우에만 액세스 토큰을 전송합니다. 

이렇게 하면 초기 인증 흐름을 발생시킨 어플리케이션만이 JWT의 인증코드를 성공적으로 교환할 수 있습니다. 따라서 악성 어플리케이션이 인증코드에 접근하더라도 그 자체로는 쓸모가 없습니다. 이것이 실제로 어떻게 작동하는지 확인하려면 이 예제를 확인해보세요. 

Native OAuth에서 사용해볼만한 라이브러리는 react-native-app-auth입니다. React-native-app-auth는 OAuth2 제공자와 통신하기 위한 SDK입니다. 이 라이브러리는 네이티브 AppAuth-iOS와 AppAuth-Android 라이브러리들을 래핑하고, PKCE를 지원할 수 있습니다. 

> React-native-app-auth는 ID 공급자가 지원하는 경우에만 PKCE를 지원할 수 있습니다. 

![https://reactnative.dev/assets/images/diagram_pkce-e0b4a829176ac05d07b0bcec73994985.svg](https://reactnative.dev/assets/images/diagram_pkce-e0b4a829176ac05d07b0bcec73994985.svg)

## 네트워크 보안[#](https://reactnative.dev/docs/security#network-security)

API는 항상 SSL 암호화를 사용해야 합니다. SSL 암호화는 요청된 데이터가 서버를 떠나 클라이언트에 도달하기 전에 일반 텍스트로 읽히는 것을 방지합니다. \`http://\` 대신 \`https://\` 로 시작하기 때문에 이 엔드포인트가 안전하다는 것을 알 수 있습니다. 

### SSL Pinning[#](https://reactnative.dev/docs/security#ssl-pinning)

https 엔드포인트를 사용하더라도 여전히 데이터가 가로채기에 취약할 수 있습니다. https를 사용하면 클라이언트는 클라이언트에 미리 설치된, 신뢰할 수 있는 인증 기관에서 서명한 유효한 인증서를 제공하는 경우에만 서버를 신뢰합니다. 공격자가 악성 루트 CA 인증서를 사용자의 디바이스에 설치하는 경우, 사용자는 공격자에 의해 서명된 모든 인증서를 신뢰하게 됩니다. 따라서 인증서에만 의존하면 중간자 공격에 취약할 수 있습니다. 

**SSL pinning**은 이러한 공격을 피하기 위해 클라이언트 측에서 사용할 수 있는 기술입니다. 개발 중에, 신뢰할 수 있는 인증서 리스트를 클라이언트에 포함하거나 (또는 고정시켜), 신뢰할 수 있는 인증서에 의해 요청된 서명일 경우에만 수락되고, 자체 서명한 인증서는 수락되지 않도록 할 수 있습니다. 

> SSL pinning을 사용할 때는 인증서 만료에 유의해야 합니다. 인증서는 1~2년마다 만료되며, 만료 시 앱과 서버 모두에서 업데이트되어야 합니다. 서버의 인증서가 업데이트되는 즉시 이전 인증서가 포함된 모든 어플리케이션은 작동을 중단합니다.

## 요약[#](https://reactnative.dev/docs/security#summary)

보안을 처리할 수 있는 완벽한 방법은 없지만, 의식적인 노력과 부지런함으로 어플리케이션의 보안 침해 가능성을 크게 줄일 수 있습니다. 어플리케이션에 저장된 데이터의 민감성, 사용자 수, 해커가 계정에 접근할 때 발생할 수 있는 피해에 비례하게 보안에 투자해야합니다. 그리고 처음부터 요청된 적 없는 정보에 접근하는 것이 훨씬 더 어렵다는 것을 명심하세요. 

`