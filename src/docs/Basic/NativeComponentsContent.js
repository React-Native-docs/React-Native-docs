export const text1_1 = `
# Android 네이티브 UI 컴포넌트

최신 앱에서 사용할 수 있는 수많은 네이티브 UI 위젯들이 있습니다. 그 중 일부는 플랫폼의 일부이며, 다른 일부는 서드 파티 라이브러리로 사용이 가능하지만, 많은 위젯을 사용자의 자체 포트폴리오에서 사용할 수 있습니다. React Native는 \`ScrollView\`, \`TextInput\` 과 같이 이미 래핑된, 가장 핵심적인 플랫폼 컴포넌트을 여러 개 가지고 있지만, 이전 앱에서 사용자가 직접 작성한 것은 분명 아닙니다. 다행히, 이러한 기존 컴포넌트들을 래핑하여 React Native 애플리케이션과 원활하게 통합할 수 있습니다. 

네이티브 모듈 가이드에서와 마찬가지로, 이 가이드도 Android SDK 프로그래밍에 다소 익숙한 사용자를 대상으로 하는 고급 가이드입니다. 이 가이드는 네이티브 UI 컴포넌트를 빌드하는 방법, 코어 React Native 라이브러리에서 사용 가능한 기존 \`ImageView\` 컴포넌트의 하위 집합 구현에 대해 안내합니다. 

## ImageView 예시

이 예시에서는 JavaScript에서 ImageViews를 사용하기 위한 구현 요구 사항들을 살펴보겠습니다. 

네이티브 뷰는 \`ViewManager\` 또는 좀 더 일반적인 \`SimpleViewManager\` 를 확장하여 생성 및 조작합니다. 이 경우 배경 색상(background color), 불투명도(opacity), Flexbox 레이아웃과 같은 공통 속성을 적용하기 때문에 \`SimpleViewManager\` 를 사용하는 것이 편리합니다. 

이러한 하위 클래스는 기본적으로 싱글톤이며, 브리지에 의해 각각 하나의 인스턴스만 생성됩니다. 이들은 필요에 따라 프로퍼티를 설정 및 업데이트하도록 다시 위임하는 \`NativeViewHierarchyManager\`에 네이티브 뷰를 보냅니다. \`ViewManagers\` 또한 대표적인 뷰의 대리자이기도 하며, 브리지를 통해 JavaScript에 이벤트를 다시 보냅니다. 

뷰를 전송하려면, 

1. ViewManager 하위 클래스를 생성합니다. 
2. \`createViewInstance\` 메서드를 구현합니다. 
3. \`@ReactProp\` (또는 \`@ReactPropGroup\`) 어노테이션을 사용해 뷰 프로퍼티 설정자를 노출시킵니다. 
4. 애플리케이션 패키지의 \`createViewManagers\`에 뷰 매니저를 등록합니다. 
5. JavaScript 모듈을 구현합니다. 

## 1. \`ViewManager\` 하위 클래스 생성하기

이 예제에서는  \`ReactImageView\` 타입의 \`SimpleViewManager\` 를 확장하는 뷰 매니저 클래스  \`ReactImageManager\` 를 생성합니다. \`ReactImageView\` 관리자에 의해 관리되는 객체 타입이며, 이는 사용자 정의 네이티브 뷰가 됩니다. \`getName\` 에 의해 반환된 이름은 JavaScript에서 네이티브 뷰 타입을 참조하는 데 사용됩니다. 

\`\`\`java
...

public class ReactImageManager extends SimpleViewManager<ReactImageView> {

  public static final String REACT_CLASS = "RCTImageView";
  ReactApplicationContext mCallerContext;

  public ReactImageManager(ReactApplicationContext reactContext) {
    mCallerContext = reactContext;
  }

  @Override
  public String getName() {
    return REACT_CLASS;
  }
\`\`\`

## 2. \`createViewInstance\` 메소드 구현하기

뷰는 \`createViewInstance\` 메소드 안에서 생성됩니다. 생성된 뷰는 기본 state로 스스로 초기화되어야 하며, 모든 속성은 \`updateView\` 후속 호출을 통해 설정됩니다. 

\`\`\`java
  @Override
  public ReactImageView createViewInstance(ThemedReactContext context) {
    return new ReactImageView(context, Fresco.newDraweeControllerBuilder(), null, mCallerContext);
  }
\`\`\`

## 3. \`@ReactProp\` (또는 \`@ReactPropGroup\`) 사용해 뷰 프로퍼티 설정자(Setter) Expose하기

JavaScript에 반영될 속성은 \`@ReactProp\` (또는 \`@ReactPropGroup\`) 어노테이션이 달린 setter 메소드로 노출되어야 합니다. Setter 메소드는 뷰를 첫 번째 인자로 받아서 현재 뷰 타입을 업데이트하고, 속성 값을 두 번째 인자로 받습니다. Setter는 \`void\` 메소드로 선언되어야 하고, \`public\` 이어야 합니다. JS로 보내지는 속성 타입은 setter의 인자 값 타입에 따라 자동으로 결정됩니다. 현재 지원되는 타입은 \`boolean\`, \`int\`, \`float\`, \`double\`, \`String\`, \`Boolean\`, \`Integer\`, \`ReadableArray\`, \`ReadableMap\` 입니다. 

\`@ReactProp\` 어노테이션은 \`String\` 타입의 \`name\` 인자 하나를 필수로 가집니다. Setter 메소드에 연결되는  \`@ReactProp\` 어노테이션에 할당된 이름은 JS 측에서 속성을 참조하는 데에 사용됩니다. 

\`name\`, \`@ReactProp\` 어노테이션은  \`defaultBoolean\`, \`defaultInt\`, \`defaultFloat\` 인자를 옵션으로 받을 수 있습니다. 이 인자들의 타입은 각각 \`boolean\`, \`int\`, \`float\` 이어야 하며, setter가 참조하는 속성이 컴포넌트에서 제거된 경우, 이 인자들을 통해 제공된 값이 setter 메소드에 전달됩니다. 기본값은 원시 타입에 대해서만 제공되며, setter가 복합 타입(complex type)인 경우, 해당하는 속성이 제거되었을 때 기본값으로 \`null\`이 제공됩니다.  

\`@ReactPropGroup\` 어노테이션이 달린 메소드의 Setter 선언 조건은 \`@ReactProp\` 의 경우와 다릅니다. 자세한 내용은 \`@ReactPropGroup\` 어노테이션 클래스 문서를 참조하십시오. **중요!** ReactJS에서 속성 값을 업데이트하면 setter 메소드가 호출됩니다. 컴포넌트를 업데이트할 수 있는 방법 중 하나는, 이전에 설정된 속성을 제거하는 것입니다. 이 경우 setter 메소드도 호출되어 뷰 매니저에게 속성이 변경되었음을 알리게 되며, 기본값이 제공됩니다. (원시 타입의 경우 \`defaultBoolean\`, \`defaultFloat\` 등을 사용해 기본값이 지정되며, 복합 타입의 경우 \`null\` 로 설정된 값과 함께 setter 메소드가 호출됩니다. )

\`\`\`java
  @ReactProp(name = "src")
  public void setSrc(ReactImageView view, @Nullable ReadableArray sources) {
    view.setSource(sources);
  }

  @ReactProp(name = "borderRadius", defaultFloat = 0f)
  public void setBorderRadius(ReactImageView view, float borderRadius) {
    view.setBorderRadius(borderRadius);
  }

  @ReactProp(name = ViewProps.RESIZE_MODE)
  public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {
    view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
  }
\`\`\`

## 4. \`ViewManager\` 등록하기

Java에서의 마지막 단계는, 애플리케이션에 ViewManager를 등록하는 것입니다. 이는 애플리케이션 패키지 멤버 함수인 \`createViewManagers\` 를 통해서 [네이티브 모듈](https://reactnative.dev/docs/native-modules-android)과 비슷한 방식으로 이루어집니다. 

\`\`\`java
  @Override
  public List<ViewManager> createViewManagers(
                            ReactApplicationContext reactContext) {
    return Arrays.<ViewManager>asList(
      new ReactImageManager(reactContext)
    );
  }
\`\`\`

## 5. JavaScript 모듈 구현하기

마지막으로, 새로운 뷰의 사용자를 위한 Java와 JavaScript 간의 인터페이스 계층을 정의하는 JavaScript 모듈을 생성합니다. 이 모듈의 컴포넌트 인터페이스를 문서화하는 것이 좋습니다. (예: Flow, TypeScript, 일반 주석 사용)

\`\`\`js
// ImageView.js

import { requireNativeComponent } from 'react-native';

/**
 * Composes \`View\`.
 *
 * - src: string
 * - borderRadius: number
 * - resizeMode: 'cover' | 'contain' | 'stretch'
 */
module.exports = requireNativeComponent('RCTImageView');
\`\`\`

\`requireNativeComponent\` 함수는 네이티브 뷰의 이름을 사용합니다. 컴포넌트가 더 정교한 작업 (예: 사용자 정의 이벤트 처리)을 해야 하는 경우, 네이티브 컴포넌트를 다른 React 컴포넌트로 감싸야 합니다. 이는 아래의 \`MyCustomView\` 예제에서 확인할 수 있습니다. 

# 이벤트

이제 JS에서 자유롭게 사용할 수 있는 네이티브 뷰 컴포넌트를 expose하는 방법을 알게 되었습니다. 그런데 pinch-zoom이나 panning과 같이 사용자로부터 발생하는 이벤트는 어떻게 처리해야 할까요? 네이티브 이벤트가 발생하면, 네이티브 코드는 해당 뷰를 나타내는 JavaScript 코드로 이벤트를 발행해야 하며, 두 개의 뷰가 \`getId()\` 메소드에서 반환받은 값으로 연결되어야 합니다. 

\`\`\`java
class MyCustomView extends View {
   ...
   public void onReceiveNativeEvent() {
      WritableMap event = Arguments.createMap();
      event.putString("message", "MyMessage");
      ReactContext reactContext = (ReactContext)getContext();
      reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
          getId(),
          "topChange",
          event);
    }
}
\`\`\`

JavaScript에서 \`topChange\` 이벤트 이름을 \`onChange\` 콜백 prop에 매핑하려면, \`ViewManager\` 에서 \`getExportedCustomBubblingEventTypeConstants\` 메소드를 재정의하여 등록하십시오. 

\`\`\`java
public class ReactImageManager extends SimpleViewManager<MyCustomView> {
    ...
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
            .put(
                "topChange",
                MapBuilder.of(
                    "phasedRegistrationNames",
                    MapBuilder.of("bubbled", "onChange")))
                    .build();
    }
}
\`\`\`

이 콜백은 원시 이벤트(더 간단한 API를 만들기 위해 일반적으로 wrapper 컴포넌트 안에서 처리되는)와 함께 호출됩니다. 

\`\`\`js
// MyCustomView.js

class MyCustomView extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }
  _onChange(event: Event) {
    if (!this.props.onChangeMessage) {
      return;
    }
    this.props.onChangeMessage(event.nativeEvent.message);
  }
  render() {
    return <RCTMyCustomView {...this.props} onChange={this._onChange} />;
  }
}
MyCustomView.propTypes = {
  /**
   * Callback that is called continuously when the user is dragging the map.
   */
  onChangeMessage: PropTypes.func,
  ...
};

var RCTMyCustomView = requireNativeComponent(\`RCTMyCustomView\`);
\`\`\`


`

export const text2_1 = `
# iOS 네이티브 UI 컴포넌트

최신 앱에서 사용할 수 있는 수많은 네이티브 UI 위젯이 있습니다. 그 중 일부는 플랫폼에 속해 있으며, 다른 일부는 서드파티 라이브러리로 사용이 가능하지만, 대부분의 위젯이 자체 포트폴리오에서 사용될 수 있습니다. React Native는 \`ScrollView\`, \`TextInput\` 과 같이 이미 래핑된 대부분의 핵심적인 플랫폼 컴포넌트들을 가지고 있습니다. 그러나 이전 앱에서 직접 작성한 컴포넌트 등 일부 컴포넌트는 React Native에 포함되어 있지 않습니다. 다행히 이러한 기존 컴포넌트를 React Native 애플리케이션과 매끄럽게 통합할 수 있습니다. 

이 가이드는 네이티브 모듈 가이드와 마찬가지로, iOS 프로그래밍에 능숙한 개발자를 대상으로 하는 고급 가이드입니다. 이 가이드에서는 코어 React Native 라이브러리에서 사용할 수 있는 기존의 \`MapView\` 컴포넌트의 하위를 일부 구현해봄으로써, 네이티브 UI 컴포넌트를 빌드하는 방법에 대해 알아봅니다. 

## iOS MapView 예제

앱에 동적인 Map을 추가한다고 가정해봅시다. (JavaScript에서만 사용하는 경우, [MKMapView](https://developer.apple.com/library/prerelease/mac/documentation/MapKit/Reference/MKMapView_Class/index.html)를 사용하는 편이 낫습니다. 

네이티브 뷰는 \`RCTViewManager\` 의 하위 클래스에서 생성 및 조작됩니다. 이러한 하위 클래스는 뷰 컨트롤러 함수들과 유사하지만 기본적으로 싱글톤이므로, 브리지에서 각각 하나의 인스턴스만 생성됩니다. 이들은 네이티브 뷰를 \`RCTUIManager\` 로 expose하고, 이를 다시 위임하여 필요에 따라 뷰의 속성을 설정 및 업데이트합니다. \`RCTViewManager\` 는 일반적으로 뷰를 대신해 브릿지를 통해 JavaScript로 이벤트를 다시 전송합니다. 

뷰를 expose하려면 다음과 같이 할 수 있습니다. 

- 컴포넌트의 매니저를 생성하기 위해 \`RCTViewManager\` 하위 클래스를 생성합니다. 
- \`RCT_EXPORT_MODULE()\` 마커 매크로를 추가합니다. 
- \`-(UIView *)view\` 메소드를 구현합니다. 


\`\`\`swift
// RNTMapManager.m
#import <MapKit/MapKit.h>

#import <React/RCTViewManager.h>

@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE(RNTMap)

- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
\`\`\`

**참고:** \`-view\` 메소드를 통해 노출시킨 \`UIView\` 인스턴스에서 \`frame\` 또는 \`backgroundColor\` 속성을 설정하지 마십시오. React Native는 JavaScript 컴포넌트의 레이아웃 속성에 일치하도록, 사용자 정의 클래스에서 설정한 값을 덮어씌웁니다. 이 정도 수준의 제어가 필요하다면, 다른 \`UIView\` 에서 스타일링하고 싶은 \`UIView\` 인스턴스를 래핑하고, wrapper \`UIView\` 를 댇신 반환하는 것이 더 나을 수 있습니다. 자세한 내용은 [Issue 2948](https://github.com/facebook/react-native/issues/2948)를 참조하세요. 

> 위 예시에서, 다른 프레임워크와의 이름 충돌을 피하기 위해 클래스 이름에 \`RNT\` 접두사가 사용 되었습니다. Apple 프레임워크는 두 글자 접두사를 사용하고, React Native는 \`RCT\` 를 접두사로 사용합니다. 이름 충돌을 피하려면, 사용자 정의 클래스에서는 \`RCT\` 외의 세 글자 접두사를 사용하는 것이 좋습니다. 

다음으로, 이것을 React 컴포넌트로 사용할 수 있게 하기 위해 약간의 JavaScript 작업이 필요합니다. 

\`\`\`jsx
// MapView.js

import { requireNativeComponent } from 'react-native';

// requireNativeComponent automatically resolves 'RNTMap' to 'RNTMapManager'
module.exports = requireNativeComponent('RNTMap');

// MyApp.js

import MapView from './MapView.js';

...

render() {
  return <MapView style={{ flex: 1 }} />;
}
\`\`\`

여기에서 \`RNTMap\`을 사용하십시오. 여기에서 매니저를 요청하면, JavaScript에서 사용할 매니저의 뷰가 expose됩니다. 

**참고:** 렌더링을 할 때는 뷰를 늘려야 합니다. 그렇지 않으면 빈 화면이 나타납니다. 

\`\`\`jsx
  render() {
    return <MapView style={{flex: 1}} />;
  }
\`\`\`

이제 JavaScript에서 완벽하게 작동하는 네이티브 맵 뷰 컴포넌트가 완성되었습니다. 핀치-줌과 다른 네이티브 제스쳐들을 지원합니다. 하지만 아직 JavaSCript에서 실제로 제어할 수는 없습니다 :(

## 속성 (Properties)

이 컴포넌트의 사용성을 더 좋게 만들기 위해서 할 수 있는 첫 번째 방법은 일부 네이티브 속성들을 연결하는 것입니다. 확대/축소 기능을 비활성화하고, 표시되는 영역을 지정할 수 있다고 가정해 보겠습니다. 확대/축소 비활성화는 boolean 타입이므로, 다음 한 줄을 추가합니다. 


\`\`\`swift
// RNTMapManager.m
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)
\`\`\`

위와 같이 명시적으로 \`BOOL\` 타입을 지정합니다. React Native는 브릿지를 통해 소통할 때, 엔진 내부에서 \`RCTConvert\`를 사용해 모든 타입의 데이터들을 변환합니다. 그리고 잘못된 값들에는 "빨간 상자" 오류가 표시되어, 문제가 있다는 것을 바로 알 수 있습니다. 이처럼 단순한 경우에는 전체 구현이 이 매트로를 통해 처리됩니다. 

이제 실제로 확대/축소를 비활성화하기 위해서, JS에서 속성을 설정합니다. 

\`\`\`jsx
// MyApp.js
<MapView zoomEnabled={false} style={{ flex: 1 }} />
\`\`\`

MapView 컴포넌트의 프로퍼티(그리고 해당 프로퍼티가 받는 인자)을 문서화하려면, 래퍼 컴포넌트를 추가하고 React \`PropTypes\`로 인터페이스를 문서화합니다. 

\`\`\`jsx
// MapView.js
import PropTypes from 'prop-types';
import React from 'react';
import { requireNativeComponent } from 'react-native';

class MapView extends React.Component {
  render() {
    return <RNTMap {...this.props} />;
  }
}

MapView.propTypes = {
  /**
   * 사용자가 핀치 제스쳐를 사용해 
   * 맵을 확대/축소할 수 있는지 여부를 나타내는 Boolean 값. 
   */
  zoomEnabled: PropTypes.bool
};

var RNTMap = requireNativeComponent('RNTMap');

module.exports = MapView;
\`\`\`

이제 문서화가 잘 이루어진 래퍼 컴포넌트를 작업에 사용할 수 있습니다. 

다음으로, 더 복잡한 \`region\` prop을 추가해 보겠습니다. 먼저 네이티브 코드를 추가합니다. 

\`\`\`swift
// RNTMapManager.m
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}
\`\`\`

자, \`BOOL\` 보다 더 복잡해졌습니다. 이제 변환 함수가 필요한 \`MKCoordinateRegion\` 타입이 있고, JS에서 region을 설정할 때 뷰가 애니메이션되도록, 필요한 사용자 정의 코드도 있습니다. 함수의 body 부분에서 \`json\`은 JS에서 전달 된 원시 값을 의미합니다. 매니저 뷰 인스턴스에 대한 접근 권한을 제공하는 \`view\` 변수도 있습니다. 또한 JS에서 NULL Sentinel을 보냈을 때 속성을 다시 기본값으로 되돌리는 \`defaultView\` 변수도 있습니다. 

뷰에 사용할 변환 함수를 직접 작성할 수 있습니다. 다음은 \`RCTConvert\` 카테고리를 통해 \`MKCoordinateRegion\`를 구현한 것입니다. 이는 기존의 ReactNative \`RCTConvert+CoreLocation\` 카테고리를 사용합니다. 

\`\`\`swift
// RNTMapManager.m

#import "RCTConvert+Mapkit.h"

// RCTConvert+Mapkit.h

#import <MapKit/MapKit.h>
#import <React/RCTConvert.h>
#import <CoreLocation/CoreLocation.h>
#import <React/RCTConvert+CoreLocation.h>

@interface RCTConvert (Mapkit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;

@end

@implementation RCTConvert(MapKit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json
{
  json = [self NSDictionary:json];
  return (MKCoordinateSpan){
    [self CLLocationDegrees:json[@"latitudeDelta"]],
    [self CLLocationDegrees:json[@"longitudeDelta"]]
  };
}

+ (MKCoordinateRegion)MKCoordinateRegion:(id)json
{
  return (MKCoordinateRegion){
    [self CLLocationCoordinate2D:json],
    [self MKCoordinateSpan:json]
  };
}

@end
\`\`\`

이러한 변환 함수는, 키가 누락되었거나 다른 개발자 오류가 발생할 때, "빨간 상자" 오류를 보여주거나 표준 초기화 값을 반환함으로써 JS에서 던질 수 있는 모든 JSON을 안전하게 처리하도록 설계되었습니다. 

\`region\` prop에 대한 지원을 완료하려면, 이를 \`propTypes\` 안에 문서화해야 합니다. 

\`\`\`jsx
// MapView.js

MapView.propTypes = {
  /**
   * 사용자가 핀치 제스쳐를 사용해 
   * 맵을 확대/축소할 수 있는지 여부를 나타내는 Boolean 값. 
   */
  zoomEnabled: PropTypes.bool,

  /**
   * 맵에 의해 표시되는 영역(region). 
   *
   * 영역(region)은 표시할 좌표의 범위와 중심 좌표에 의해 정의됩니다.  
   */
  region: PropTypes.shape({
    /**
     * 맵 중앙의 좌표.
     */
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,

    /**
     * 최소 및 최대 위도/경도 사이의 거리가 표시됩니다. 
     */
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }),
};

// MyApp.js

render() {
  var region = {
    latitude: 37.48,
    longitude: -122.16,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  return (
    <MapView
      region={region}
      zoomEnabled={false}
      style={{ flex: 1 }}
    />
  );
}
\`\`\`

JS 문서에서 영역(region)의 형태가 명시되어 있음을 확인할 수 있습니다. 


## 이벤트

이제 JS에서 자유롭게 제어할 수 있는 네이티브 맵 컴포넌트를 만들었습니다. 그런데 핀치 줌이나 패닝과 같이 보이는 영역을 변경하기 위한 사용자 이벤트들은 어떻게 처리할 수 있을까요? 

지금까지는 매니저의 \`-(UIView *)view\` 메소드로 \`MKMapView\` 인스턴스를 반환한 것이 전부입니다. \`MKMapView\`에는 새로운 속성을 추가할 수 없으므로, 뷰에 사용할 새로운 \`MKMapView\` 하위 클래스를 추가해야 합니다. 그런 다음 이 하위 클래스에 \`onRegionChange\` 콜백을 추가할 수 있습니다. 

\`\`\`swift
// RNTMapView.h

#import <MapKit/MapKit.h>

#import <React/RCTComponent.h>

@interface RNTMapView: MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end

// RNTMapView.m

#import "RNTMapView.h"

@implementation RNTMapView

@end
\`\`\`

모든 \`RCTBubblingEventBlock\`에는 \`on\` 접두사가 붙어야 합니다. 다음으로 \`RNTMapManager\`에 이벤트 핸들러 속성을 선언하고, 이 클래스가 노출하는 모든 뷰를 위임하도록 만든 다음, 네이티브 뷰에서 이벤트 핸들러 블록을 호출함으로써 JS에 이벤트를 전달합니다. 

\`\`\`swift
// RNTMapManager.m

#import <MapKit/MapKit.h>
#import <React/RCTViewManager.h>

#import "RNTMapView.h"
#import "RCTConvert+Mapkit.h"

@interface RNTMapManager : RCTViewManager <MKMapViewDelegate>
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
    [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

- (UIView *)view
{
  RNTMapView *map = [RNTMapView new];
  map.delegate = self;
  return map;
}

#pragma mark MKMapViewDelegate

- (void)mapView:(RNTMapView *)mapView regionDidChangeAnimated:(BOOL)animated
{
  if (!mapView.onRegionChange) {
    return;
  }

  MKCoordinateRegion region = mapView.region;
  mapView.onRegionChange(@{
    @"region": @{
      @"latitude": @(region.center.latitude),
      @"longitude": @(region.center.longitude),
      @"latitudeDelta": @(region.span.latitudeDelta),
      @"longitudeDelta": @(region.span.longitudeDelta),
    }
  });
}
@end
\`\`\`

대리자 메소드 \`-mapView:regionDidChangeAnimated:\`안에서 이벤트 핸들러 블록은 영역 데이터에 상응하는 뷰에서 호출됩니다. \`onRegionChange\` 이벤트 핸들러 블록을 호출하면 JavaScript에서 동일한 콜백 prop이 호출됩니다. 이 콜백은 일반적으로 API를 단순화하기 위해 래퍼 컴포넌트에서 처리하는 원시 이벤트와 함께 호출됩니다. 

\`\`\`jsx
// MapView.js

class MapView extends React.Component {
  _onRegionChange = (event) => {
    if (!this.props.onRegionChange) {
      return;
    }

    // process raw event...
    this.props.onRegionChange(event.nativeEvent);
  };
  render() {
    return (
      <RNTMap
        {...this.props}
        onRegionChange={this._onRegionChange}
      />
    );
  }
}
MapView.propTypes = {
  /**
   * Callback that is called continuously when the user is dragging the map.
   */
  onRegionChange: PropTypes.func,
  ...
};

// MyApp.js

class MyApp extends React.Component {
  onRegionChange(event) {
    // Do stuff with event.region.latitude, etc.
  }

  render() {
    var region = {
      latitude: 37.48,
      longitude: -122.16,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    };
    return (
      <MapView
        region={region}
        zoomEnabled={false}
        onRegionChange={this.onRegionChange}
      />
    );
  }
}
\`\`\`

## 여러 개의 네이티브 뷰 처리하기

React Native 뷰는 다음 예시와 같이 뷰 트리에 하나 이상의 자식 뷰를 가질 수 있습니다. 

\`\`\`jsx
<View>
  <MyNativeView />
  <MyNativeView />
  <Button />
</View>
\`\`\`

위 예시에서, \`MyNativeView\` 클래스는 \`NativeComponent\`의 래퍼이며, iOS 플랫폼에서 호출될 메소드들을 expose합니다. \`MyNativeView\`는 \`MyNativeView.ios.js\`에서 정의되며, \`NativeComponent\`의 프록시 메소드를 포함합니다. 

사용자가 버튼을 클릭하는 등 컴포넌트와 상호 작용할 때, \`MyNativeView\`의 \`backgroundColor\`가 변경됩니다. 이 경우 \`UIManager\`는 어떤 \`MyNativeView\`가 처리되어야 할지, 어떤 뷰의 \`backgroundColor\`가 변경되어야 할지 알 수 없습니다. 아래에서 이 문제에 대한 해결책을 찾을 수 있습니다. 

\`\`\`jsx
<View>
  <MyNativeView ref={this.myNativeReference} />
  <MyNativeView ref={this.myNativeReference2} />
  <Button
    onPress={() => {
      this.myNativeReference.callNativeMethod();
    }}
  />
</View>
\`\`\`

이제 위 컴포넌트는 특정한 \`MyNativeView\`에 대한 참조를 가지고 있어, \`MyNativeView\`의 특정 인스턴스를 사용할 수 있습니다. 버튼은 어떤 \`MyNativeView\`의 \`backgroundColor\`를 변경해야 할지 제어할 수 있게 되었습니다. 이 예에서는 \`callNativeMethod\`가 \`backgroundColor\`를 바꾼다고 
가정해 봅시다. 

\`MyNativeView.ios.js\`에는 다음 코드가 포함되어 있습니다. 

\`\`\`jsx
class MyNativeView extends React.Component {
  callNativeMethod = () => {
    UIManager.dispatchViewManagerCommand(
      ReactNative.findNodeHandle(this),
      UIManager.getViewManagerConfig('RNCMyNativeView').Commands
        .callNativeMethod,
      []
    );
  };

  render() {
    return <NativeComponent ref={NATIVE_COMPONENT_REF} />;
  }
}
\`\`\`

\`callNativeMethod\`는 (예를 들어 \`MyNativeView\`를 통해 노출되는 \`backgroundColor\`를 변경하는) 사용자 정의 iOS 메소드입니다. 이 메소드는 3개의 파라미터를 필요로 하는 \`UIManager.dispatchViewManagerCommand\`를 사용합니다. 

- \`(nonnull NSNumber \\*)reactTag\`  -  Id 또는 리액트 뷰
- \`commandID:(NSInteger)commandID\`  -  호출되어야 하는 네이티브 메소드의 Id
- \`commandArgs:(NSArray<id> \\*)commandArgs\`  -  JS에서 네이티브로 전달할 수 있는 네이티브 메소드의 인자들.

\`RNCMyNativeViewManager.m\`

\`\`\`swift
#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import <React/RCTLog.h>

RCT_EXPORT_METHOD(callNativeMethod:(nonnull NSNumber*) reactTag) {
    [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
        NativeView *view = viewRegistry[reactTag];
        if (!view || ![view isKindOfClass:[NativeView class]]) {
            RCTLogError(@"Cannot find NativeView with tag #%@", reactTag);
            return;
        }
        [view callNativeMethod];
    }];

}
\`\`\`

여기서 \`callNativeMethod\`는 \`RNCMyNativeViewManager.m\` 파일에 정의되어 있으며, 단 하나의 매개변수인 \`(nonnull NSNumber*) reactTag\`를 포함합니다. 이 함수는 \`addUIBlock\`을 사용해 특정한 뷰를 찾습니다. \`addUIBlock\`은 \`viewRegistry\` 파라미터를 포함하고, 정확한 컴포넌트에서 메소드를 호출할 수 있도록 하는 \`reactTag\` 기반 컴포넌트를 반환합니다. 

## 스타일

모든 기본 네이티브 뷰가 \`UIView\`의 하위 클래스이기 때문에, 대부분의 스타일 속성은 즉시 예상대로 작동합니다. 그러나 일부 컴포넌트에는 기본 스타일을 적용하고 싶을 수도 있습니다. (예: 고정된 크기를 가진 \`UIDatePicker\`). 이러한 기본 스타일은 레이아웃 알고리즘이 예상대로 작동되도록 하는 데 있어서 중요하지만, 컴포넌트를 사용할 때 기본 스타일을 재정의할 수도 있어야 합니다. 
\`DatePickerIOS\`는 유연한 스타일을 가진 추가 뷰에서 네이티브 컴포넌트를 래핑하고, 내부 네이티브 컴포넌트에서 고정된 스타일(네이티브로부터 전달받은 상수를 통해 생성됨)을 사용함으로써 이를 수행합니다. 

\`\`\`jsx
// DatePickerIOS.ios.js

import { UIManager } from 'react-native';
var RCTDatePickerIOSConsts = UIManager.RCTDatePicker.Constants;
...
  render: function() {
    return (
      <View style={this.props.style}>
        <RCTDatePickerIOS
          ref={DATEPICKER}
          style={styles.rkDatePickerIOS}
          ...
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  rkDatePickerIOS: {
    height: RCTDatePickerIOSConsts.ComponentHeight,
    width: RCTDatePickerIOSConsts.ComponentWidth,
  },
});
\`\`\`

\`RCTDatePickerIOSConsts\` 상수는 네이티브 컴포넌트의 실제 프레임을 캡쳐하여 네이티브에서 내보내집니다. 

\`\`\`swift
// RCTDatePickerManager.m

- (NSDictionary *)constantsToExport
{
  UIDatePicker *dp = [[UIDatePicker alloc] init];
  [dp layoutIfNeeded];

  return @{
    @"ComponentHeight": @(CGRectGetHeight(dp.frame)),
    @"ComponentWidth": @(CGRectGetWidth(dp.frame)),
    @"DatePickerModes": @{
      @"time": @(UIDatePickerModeTime),
      @"date": @(UIDatePickerModeDate),
      @"datetime": @(UIDatePickerModeDateAndTime),
    }
  };
}
\`\`\`

이 가이드에서는 사용자 정의 네이티브 컴포넌트를 연결하는 다양한 방법에 대해 알아보았습니다. 그러나 하위 뷰를 삽입하고 배치하기 위한 사용자 정의 훅(hooks)과 같이, 더 많은 것들을 고려해야할 수도 있습니다. 더 자세히 알아보려면, 구현된 컴포넌트의 일부 [소스 코드](https://github.com/facebook/react-native/blob/master/React/Views)를 확인해보십시오. 

`

export const text3_1 = `
# 직접 조작하기

때때로 전체 하위 트리를 다시 렌더링하기 위해 state/props를 사용하지 않고, 컴포넌트를 직접 변경해야할 수도 있습니다. 예를 들어 브라우저에서 React를 사용할 때, DOM 노드를 직접 수정해야는 경우가 있습니다. 이는 모바일 앱의 뷰에서도 마찬가지입니다. React Native에서 \`setNativeProps\` 는 DOM 노드에서 직접 프로퍼티를 설정하는 것과 같습니다. 

> 잦은 리렌더링이 성능 저하를 유발할 때 setNativeProps를 사용합니다. 
>
> 직접 조작은 자주 사용되는 방식은 아닙니다. 일반적으로, 연속적인 애니메이션을 생성하기 위해서 컴포넌트 계층을 렌더링하고 많은 뷰를 조정하는 오버헤드를 피하려고 할 때 이를 사용합니다. \`setNativeProps\` 은 필수적이며, React 컴포넌트가 아닌 네이티브 계층(DOM, UIView 등)에 state를 저장하므로 코드를 추론하기가 더 어렵습니다. 따라서 먼저 \`setState\` 와 [shouldComponentUpdate](https://reactjs.org/docs/optimizing-performance.html#shouldcomponentupdate-in-action) 로 문제를 해결해보는 것이 좋습니다. 

## TouchableOpacity와 함께 setNativeProps 사용하기 

[TouchableOpacity](https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js) 는 내부적으로 \`setNativeProps\` 를 사용하여 자식 컴포넌트의 불투명도를 업데이트합니다. 

\`\`\`jsx
const viewRef = useRef();
const setOpacityTo = useCallback((value) => {
  // 수정됨: 애니메이션 관련 코드
  viewRef.current.setNativeProps({
    opacity: value
  });
}, []);
\`\`\`

이를 통해 우리는 다음과 같은 코드를 작성할 수 있으며, 자식 컴포넌트가 아무런 정보 없이, 또는 구현에서의 변경 없이 탭에 반응해 불투명도를 업데이트할 수 있음을 알 수 있습니다. 

\`\`\`jsx
<TouchableOpacity onPress={handlePress}>
  <View>
    <Text>Press me!</Text>
  </View>
</TouchableOpacity>
\`\`\`

\`setNativeProps\` 를 사용할 수 없었다고 가정해봅시다. 이러한 제약 조건이 있을 때 구현할 수 있는 한 가지 방법은, state에 불투명도 값을 저장하고, \`onPress\` 가 발동되었을 때마다 해당 값을 업데이트하는 것입니다. 

\`\`\`jsx
const [buttonOpacity, setButtonOpacity] = useState(1);
return (
  <TouchableOpacity
    onPressIn={() => setButtonOpacity(0.5)}
    onPressOut={() => setButtonOpacity(1)}>
    <View style={{ opacity: buttonOpacity }}>
      <Text>Press me!</Text>
    </View>
  </TouchableOpacity>
);
\`\`\`

이는 원래 예시와 비교했을 때 더 많은 계산을 요구합니다. React는 불투명도가 변경될 때마다, 뷰의 다른 속성이나 자식 컴포넌트가 변경되지 않았음에도 불구하고 매번 컴포넌트 계층을 다시 렌더링해야 합니다. 이러한 오버헤드는 일반적으로는 문제가 되지 않지만, 지속적으로 애니메이션을 수행하고 제스쳐에 반응할 때는 컴포넌트를 신중하게 최적화하는 것이 애니메이션의 정확도를 향상시킬 수 있습니다. 

[NativeMethodsMixin](https://github.com/facebook/react-native/blob/master/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js) 에서 \`setNativeProps\` 의 구현을 살펴 보면, \`RCTUIManager.updateView\` 를 둘러싼 래퍼라는 것을 알 수 있습니다. 이는 리렌더링을 통해 호출된 것과 정확히 동일한 함수 호출입니다. [receiveComponent in ReactNativeBaseComponent](https://github.com/facebook/react-native/blob/fb2ec1ea47c53c2e7b873acb1cb46192ac74274e/Libraries/Renderer/oss/ReactNativeRenderer-prod.js#L5793-L5813) 를 참고하세요. 

## 복합 컴포넌트와 setNativeProps

복합 컴포넌트는 네이티브 뷰에서 지원되지 않습니다. 따라서 복합 컴포넌트에서 \`setNativeProps\` 를 호출할 수 없습니다. 다음 예를 살펴보세요. 

**복합 컴포넌트에서의 setNativeProps**

`

export const code3_1 = `

\`\`\`jsx
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const MyButton = (props) => (
  <View style={{ marginTop: 50 }}>
    <Text>{props.label}</Text>
  </View>
);

export default App = () => (
  <TouchableOpacity>
    <MyButton label="Press me!" />
  </TouchableOpacity>
);
\`\`\`

`

export const text3_2 = `

위 예제를 실행하면, 바로 \`Touchable child must either be native or forward setNativeProps to a native component\` 오류가 나타납니다. 이 오류는 불투명도가 설정되어야 할 \`MyButton\`이 네이티브 뷰에서 직접적으로 지원되지 않기 때문에 발생합니다. 다음과 같이 생각해볼 수 있습니다: \`createReactClass\` 를 통해 정의한 컴포넌트에는 스타일 prop을 설정하고 해당 prop이 작동하도록 할 수 없습니다. 네이티브 컴포넌트를 감싸고 있는 경우가 아니라면, 하위 컴포넌트에 스타일 prop을 전달해야 합니다. 마찬가지로, \`setNativeProps\` 를 네이티브 지원 하위 컴포넌트로 전달할 것입니다. 

#### 자식 컴포넌트에 setNativeProps 전달하기

\`setNativeProps\` 는 모든 \`View\` 컴포넌트의 모든 참조에 존재하므로, 사용자 정의 컴포넌트에 대한 참조를 렌더링하는 \`<View />\` 컴포넌트 중 하나에 전달하면 됩니다. 즉, 사용자 정의 컴포넌트에 대해 \`setNativeProps\` 를 호출하면 이를 감싸고 있는 \`View\` 컴포넌트에 대해 \`setNativeProps\` 를 호출한 것과 동일한 효과가 발생합니다. 

**setNativeProps 전달**

`

export const code3_2 = `

\`\`\`jsx
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const MyButton = React.forwardRef((props, ref) => (
  <View {...props} ref={ref} style={{ marginTop: 50 }}>
    <Text>{props.label}</Text>
  </View>
));

export default App = () => (
  <TouchableOpacity>
    <MyButton label="Press me!" />
  </TouchableOpacity>
);
\`\`\`

`

export const text3_3 = `
이제 \`TouchableOpacity\` 안에서 \`MyButton\`을 사용할 수 있습니다!

이제 \`{...props}\` 를 사용해 자식 뷰에 모든 props을 전달했습니다. 그 이유는 \`TouchableOpacity\` 가  복합 컴포넌트이므로, 자식 컴포넌트의 \`setNativeProps\`에 따라 자식이 터치 핸들링을 수행하도록 요청해야하기 때문입니다. 이를 위해 \`TouchableOpacity\` 컴포넌트로 다시 호출하는 [다양한 props](https://reactnative.dev/docs/view#onmoveshouldsetresponder) 로 건네집니다. 반면 \`TouchableHighlight\` 는 네이티브 뷰에서 지원되어 \`setNativeProps\` 만 구현하면 됩니다. 

## setNativeProps를 사용해 TextInput 값 지우기 

또 다른 \`setNativeProps\` 의 매우 일반적인 사용 사례는 TextInput의 값을 지우는 것입니다. TextInput의 \`controlled\` prop은 \`bufferDelay\`이 낮고 사용자가 매우 빠르게 타이핑을 할 때 몇 개의 문자를 놓칠 수 있습니다. 일부 개발자는 이 prop을 완전히 건너뛰고, 대신에 필요할 때 \`setNativeProps\` 를 사용해 TextInput 값을 직접 조정하는 것을 선호하기도 합니다. 예를 들어, 다음 코드는 버튼을 눌렀을 때 입력을 지우는 것을 보여줍니다. 



**텍스트 지우기**

`

export const code3_3 = `

\`\`\`jsx
import React from "react";
import { useCallback, useRef } from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  const inputRef = useRef();
  const clearText = useCallback(() => {
    inputRef.current.setNativeProps({ text: "" });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput ref={inputRef} style={styles.input} />
      <TouchableOpacity onPress={clearText}>
        <Text>Clear text</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: 200,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default App;
import React from "react";
import { useCallback, useRef } from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  const inputRef = useRef();
  const clearText = useCallback(() => {
    inputRef.current.setNativeProps({ text: "" });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput ref={inputRef} style={styles.input} />
      <TouchableOpacity onPress={clearText}>
        <Text>Clear text</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: 200,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default App;
\`\`\`

`

export const text3_4 = `
## 렌더 함수와의 충돌 피하기

렌더 함수로도 관리되는 속성을 업데이트하면, \`setNativeProps\` 에서 이전에 설정된 값이 완전히 무시되고 재정의되기 때문에, 컴포넌트가 다시 렌더링되고 속성이 변경될 때마다 예기치 않은 혼란스러운 버그가 발생할 수 있습니다. 

## setNativeProps & shouldComponentUpdate

[shouldComponentUpdate를 현명하게 사용](https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation)하면 변경되지 않은 컴포넌트 하위 트리를 조정하는 데에 수반되는 불필요한 오버헤드를 피할 수 있으며, \`setNativeProps\` 대신 \`setState\` 를 사용할 수 있을 정도로 성능이 우수합니다. 

## 다른 네이티브 메소드들

여기에서 설명하는 메소드들은 React Native에서 제공하는 대부분의 기본 컴포넌트에서 사용할 수 있습니다. 그러나 네이티브 뷰에서 직접적으로 지원되지 않는 복합 컴포넌트에서는 사용할 수 *없음*에 유의하십시오.  여기에는 일반적으로 사용자가 앱에서 정의한 대부분의 컴포넌트가 포함됩니다. 

### measure(callback)[#](https://reactnative.dev/docs/direct-manipulation#measurecallback)

주어진 뷰의 뷰 포트에서의 너비 및 높이, 화면 상에서의 위치를 결정하며, 비동기 콜백을 통해 값을 반환합니다. 성공하면 다음 인자들을 사용하여 콜백이 호출됩니다. 

- x
- y
- width
- height
- pageX
- pageY

이러한 측정은 네이티브에서 렌더링을 완료한 후에만 사용할 수 있습니다. 최대한 빠르게 측정해야 하고, \`pageX\` 와 \`pageY\` 가 필요하지 않다면, [onLayout](https://reactnative.dev/docs/view#onlayout) 속성을 대신 사용하는 것을 고려해보십시오. 

또한 \`measure()\` 에서 반환된 너비와 높이는 뷰포트에서의 컴포넌트 너비와 높이입니다. 컴포넌트의 실제 크기가 필요한 경우에도 [onLayout](https://reactnative.dev/docs/view#onlayout) 속성 사용을 고려하십시오. 

### measureInWindow(callback)

화면 상에서 주어진 뷰의 위치를 결정하고, 비동기 콜백을 통해 값을 반환합니다. React 최상위 뷰가 다른 네이티브 뷰에 포함된 경우 절대 좌표를 제공합니다. 성공하면 다음 인자들을 사용해 콜백이 호출됩니다. 

- x
- y
- width
- height

### measureLayout(relativeToNativeComponentRef, onSuccess, onFail)

\`measure()\` 와 비슷하지만, \`relativeToNativeComponentRef\` 참조로 지정된 상위 뷰와 관련된 뷰를 측정합니다. 이는 반환된 좌표가 상위 뷰의 원래 \`x\`, \`y\` 에 상대적이라는 것을 의미합니다. 

> 참고: 이 메소드는 \`relativeToNativeNode\` 핸들러로 호출될 수도 있습니다 (참조 대신에). 그러나 이러한 방법은 더 이상 사용되지 않습니다. 

**measureLayout example**
`

export const code3_4 = `

\`\`\`jsx
import React, { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const App = () => {
  const textContainerRef = useRef(null);
  const textRef = useRef(null);
  const [measure, setMeasure] = useState(null);

  useEffect(() => {
    if (textRef.current && textContainerRef.current) {
      textRef.current.measureLayout(
        textContainerRef.current,
        (left, top, width, height) => {
          setMeasure({ left, top, width, height });
        }
      );
    }
  }, [measure]);

  return (
    <View style={styles.container}>
      <View
        ref={textContainerRef}
        style={styles.textContainer}
      >
        <Text ref={textRef}>
          Where am I? (relative to the text container)
        </Text>
      </View>
      <Text style={styles.measure}>
        {JSON.stringify(measure)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "#61dafb",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  measure: {
    textAlign: "center",
    padding: 12,
  },
});

export default App;
\`\`\`

`

export const text3_5 = `
### focus()

주어진 input이나 뷰에 포커스를 요청합니다. 발생할 정확한 동작은 플랫폼과 뷰 타입에 따라 달라집니다. 

### blur()

input이나 뷰에서 포커스를 제거합니다. \`focus()\` 와 반대로 동작합니다. 
`