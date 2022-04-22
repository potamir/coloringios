import * as React from 'react';
import{
    Component
} from 'react'
import {View, StyleSheet} from 'react-native';
import Svg, {
    Ellipse,
    Path,
    Rect,
    G,
    Text,
    ClipPath,
    Defs,
    Circle,
    Polyline,
    Line,
    Use
  } from 'react-native-svg';

import {inject, observer} from "mobx-react";

@inject('dinoStore')
@observer

export default class Dino4 extends Component {
  constructor(props){
    super(props);  
  }

  _Move(e, number)
  {
    
    let _locationX = e.nativeEvent.locationX;
    let _locationY = e.nativeEvent.locationY;  

    let _QX = (_locationX -this.props.dinoStore._X )/2 + this.props.dinoStore._X;
    let _QY = (_locationY -this.props.dinoStore._Y)/2 + this.props.dinoStore._Y;
    
    var data = `M ${this.props.dinoStore._X},${this.props.dinoStore._Y} Q ${_QX},${_QY} ${_locationX},${_locationY}`;

    this.props.dinoStore.setLastPointStr(data, number);

    this.props.dinoStore.set_X(_locationX);
    this.props.dinoStore.set_Y(_locationY);

  }

  
  _Release(e, number)
  {
    //this.props.dinoStore.setPointStrA("");
  }

  _Press(e, number)
  {
    this.props.dinoStore.set_X(e.nativeEvent.locationX);
    this.props.dinoStore.set_Y(e.nativeEvent.locationY);
    var data = ` M ${e.nativeEvent.locationX},${e.nativeEvent.locationY} Q ${e.nativeEvent.locationX},${e.nativeEvent.locationY} ${e.nativeEvent.locationX},${e.nativeEvent.locationY}`;
    this.props.dinoStore.addPointStr({color:this.props.mau, data: data }, number);

  }



  render() {

    return (
      <Svg height="100%" width="100%" >
        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 1)} onResponderGrant={(e) => this._Press(e, 1)} onResponderRelease={(e) => this._Release(e, 1)} >
          <Defs>
            <Path id="path1"
                  d="M254.79005978150673,59.51470524979272 H201.19419465330236 L222.30916283282164,17.80233216854458 C224.6508069456355,13.176995417202917 231.33344748917347,13.176995417202917 233.67551005161437,17.80233216854458 L254.79005978150673,59.51470524979272 z"
                  stroke="#222222" 
                    stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_1" href="#path1" />            
          </Defs>
          
          <ClipPath id="clip-1">
              <Use id="shape_1" href="#path1" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>
          
          <Use href="#shape_1" fill="white"/>

          <G clipPath="url(#clip-1)">
            {
              this.props.dinoStore.pointStr[0].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }
                 
          </G> 
        </G> 

        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 2)} onResponderGrant={(e) => this._Press(e, 2)} onResponderRelease={(e) => this._Release(e, 2)} >

          <Defs>
                <Path id="path2"
                  d="M207.76761984418755,61.54328558156803 L162.73992927888133,90.2562943566495 L157.57500553255147,43.900464523704194 C157.00256644278565,38.75978239728699 162.6169050885369,35.17938771024468 167.1244444708156,37.81174761591105 L207.76761984418755,61.54328558156803 z"
                  stroke="#222222" 
                  stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                />
                <Use id="shape_2" href="#path2"/>
                
          </Defs>
          
          <ClipPath id="clip-2">
              <Use id="shape_2" href="#path2" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>

          <Use href="#shape_2" fill="white"/>

          <G clipPath="url(#clip-2)">
            {
              this.props.dinoStore.pointStr[1].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }
                
          </G> 
        </G>

        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 3)} onResponderGrant={(e) => this._Press(e, 3)} onResponderRelease={(e) => this._Release(e, 3)} >
          <Defs>
            <Path id="path3"
                  d="M165.65443093108806,95.81298424670402 L160.8096211494298,148.5354068140628 L120.66147168482462,123.9936353471061 C116.20916765331286,121.27232872436593 116.81340891473228,114.69845542019182 121.68918396879016,112.8124708941342 L165.65443093108806,95.81298424670402 z"
                  stroke="#222222" 
                  stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_3" href="#path3" />            
          </Defs>
          
          <ClipPath id="clip-3">
              <Use id="shape_3" href="#path3" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>
          
          <Use href="#shape_3" fill="white"/>

          <G clipPath="url(#clip-3)">
             {
              this.props.dinoStore.pointStr[2].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }

                
          </G> 
        </G> 

        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 4)} onResponderGrant={(e) => this._Press(e, 4)} onResponderRelease={(e) => this._Release(e, 4)} >
          <Defs>
            <Path id="path4"
                  d="M155.3655915018764,154.09374998882126 L147.8222000755547,201.97824819117795 L112.59627357360675,177.2426290926804 C108.68962785573139,174.50024308996458 109.63030261727636,168.52899206038873 114.19600649771101,167.08815444087597 L155.3655915018764,154.09374998882126 z"
                  stroke="#222222" 
                     stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_4" href="#path4" />            
          </Defs>
          
          <ClipPath id="clip-4">
              <Use id="shape_4" href="#path4" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>
          
         <Use href="#shape_4" fill="white"/>

          <G clipPath="url(#clip-4)">
             {
              this.props.dinoStore.pointStr[3].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }

              
          </G> 
        </G> 

        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 5)} onResponderGrant={(e) => this._Press(e, 5)} onResponderRelease={(e) => this._Release(e, 5)} >
          <Defs>
            <Path id="path5"
                  d="M135.87337097594755,225.70619026260377 L123.76092807217499,270.45606066622696 L92.83582683675697,243.3996431645268 C89.40621369368645,240.39934474799114 90.91681684723507,234.81950887208097 95.40385219778973,233.9102022848956 L135.87337097594755,225.70619026260377 z"
                  stroke="#222222" 
                     stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_5" href="#path5" />            
          </Defs>
          
          <ClipPath id="clip-5">
              <Use id="shape_5" href="#path5" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>
          
          <Use href="#shape_5" fill="white"/>

          <G clipPath="url(#clip-5)">
             {
              this.props.dinoStore.pointStr[4].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }

             
          </G> 
        </G> 

        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 6)} onResponderGrant={(e) => this._Press(e, 6)} onResponderRelease={(e) => this._Release(e, 6)} >
          <Defs>
            <Path id="path6"
                  d="M122.9252841670125,288.07759568352714 L91.15909918128071,312.24448484385783 L84.39569785972756,278.00082541280943 C83.64583612810455,274.20364376895856 87.60688029749274,271.19011907479114 91.13231840515127,272.875642830492 L122.9252841670125,288.07759568352714 z"
                  stroke="#222222" 
                     stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_6" href="#path6" />            
          </Defs>
          
          <ClipPath id="clip-6">
              <Use id="shape_6" href="#path6" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>
          
          <Use href="#shape_6" fill="white"/>

          <G clipPath="url(#clip-6)">
             {
              this.props.dinoStore.pointStr[5].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }

              
          </G> 
        </G> 

        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 7)} onResponderGrant={(e) => this._Press(e, 7)} onResponderRelease={(e) => this._Release(e, 7)} >
          <Defs>
            <Path id="path7"
                  d="M54.089902072301804,270.6156026401604 L35.2265276458613,240.62584475243548 L66.58062343890205,237.75946239692163 C70.05793983945311,237.44203173375874 72.40962674331553,241.1813484129705 70.58100187323035,244.1196486531072 L54.089902072301804,270.6156026401604 z"
                  stroke="#222222" 
                     stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_7" href="#path7" />            
          </Defs>
          
          <ClipPath id="clip-7">
              <Use id="shape_7" href="#path7" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>
          
          <Use href="#shape_7" fill="white"/>

          <G clipPath="url(#clip-7)">
           {
              this.props.dinoStore.pointStr[6].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }

             
          </G> 
        </G> 

        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 8)} onResponderGrant={(e) => this._Press(e, 8)} onResponderRelease={(e) => this._Release(e, 8)} >
          <Defs>
            <Path id="path8"
                  d="M254.28750177945346,225.70536362025177 C252.84050296921214,225.70536362025177 251.38471671680335,225.68221763439615 249.9084264326705,225.63509902033292 C238.37888385933923,225.26889645840282 229.3311660238742,215.74060338822827 229.70107549416144,204.3523650260837 C230.0709849644487,192.96330002158717 239.7133197199117,184.0219230213232 251.24788368876725,184.39267211618923 C284.1225417364798,185.44209458203633 296.30068123169474,169.13657418909898 303.89344971400504,153.05466055237403 C308.7683878688088,142.72741764900437 321.19508644247486,138.25817577298832 331.6525610713763,143.07626072154272 C342.1075250025155,147.8926923853931 346.6301285713671,160.1675046700434 341.75477196693623,170.49474757341306 C324.4506245407043,207.1460028546227 295.0336157610728,225.70536362025177 254.28750177945346,225.70536362025177 z"
                  stroke="#222222" 
                     stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_8" href="#path8" />            
          </Defs>
          
          <ClipPath id="clip-8">
              <Use id="shape_8" href="#path8" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>
          
          <Use href="#shape_8" fill="white"/>

          <G clipPath="url(#clip-8)">
            {
              this.props.dinoStore.pointStr[7].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }
             
          </G> 
        </G> 

        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 9)} onResponderGrant={(e) => this._Press(e, 9)} onResponderRelease={(e) => this._Release(e, 9)} >
          <Defs>
            <Path id="path9"
                  d="M273.2081201148705,314.69299949044233 H266.4781947634791 V307.07011704159726 C266.4781947634791,287.92136027900165 250.76290057104896,272.3986701933957 231.3769662503837,272.3986701933957 C211.99103192971845,272.3986701933957 196.27573773728824,287.92136027900165 196.27573773728824,307.07011704159726 V318.7100679999217 C196.27573773728824,333.2254943796319 208.1881617193445,344.9927482601624 222.88369417072255,344.9927482601624 H291.0445354666741 C294.58964070680264,344.9927482601624 297.4639711948153,342.1536451022641 297.4639711948153,338.65198809924846 C297.4631342955613,325.4195106498217 286.60394802471893,314.69299949044233 273.2081201148705,314.69299949044233 z"
                  stroke="#222222" 
                     stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_9" href="#path9" />            
          </Defs>
          
          <ClipPath id="clip-9">
              <Use id="shape_9" href="#path9" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>
          
         <Use href="#shape_9" fill="white"/>

          <G clipPath="url(#clip-9)">
            {
              this.props.dinoStore.pointStr[8].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }
            
          </G> 
        </G> 

        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 10)} onResponderGrant={(e) => this._Press(e, 10)} onResponderRelease={(e) => this._Release(e, 10)} >
          <Defs>
            <Path id="path10"
                  d="M314.9664637442556,88.54225143980513 C311.8929512337806,87.28947495536931 309.48351828138914,84.86699954287234 308.08296737974723,81.88778050631231 C299.4394718839852,63.502841276952466 280.5912453340429,50.74919640991388 258.71846487998715,50.74919640991388 H208.99618794912357 C178.9427172867919,50.74919640991388 154.57932465270244,74.81337525801028 154.57932465270244,104.49892876020411 C154.57932465270244,104.72708204935245 154.5805800015835,104.95482201732476 154.5839275985997,105.1821486641211 C154.9249640446224,132.07861087071186 150.78189428747976,158.84487690686476 142.22836546152746,184.3823390867894 L105.2499719216123,294.7829051216671 C104.26996289512726,297.70880572652396 101.50233706200515,299.68406762659623 98.38279509255777,299.68406762659623 C81.75318846508502,299.68406762659623 66.50781320380035,290.5389232865675 58.84056068788004,275.9635653363382 L37.81413644943858,235.99334101190206 C35.66041806412026,231.89898144251202 31.45499931255128,229.13882262922846 26.784055350920607,229.07062463518957 C19.00938681574392,228.95778795414338 13.046479630683471,235.79949338036118 14.278311642710193,243.35252455046353 L20.991122404356446,284.5003009053048 C26.67814575032137,319.3622888156392 57.14123675254469,344.99192161781036 92.8898068386428,344.99192161781036 H195.95855292000576 C229.404394708603,344.99192161781036 256.5174198418526,318.21118934049775 256.5174198418526,285.17525438570186 V166.12387613728353 C256.5174198418526,161.77491072348155 260.08679516034834,158.24969441343433 264.48972213587166,158.24969441343433 H300.98773550396584 C321.23734985480405,158.24969441343433 337.6527102732416,142.03510467921546 337.6527102732416,122.03366633054567 C337.6527102732416,106.9209908515251 328.28236777534283,93.97039844412569 314.9664637442556,88.54225143980513 z"
                  stroke="#222222" 
                  stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_10" href="#path10" />            
          </Defs>
          
          <ClipPath id="clip-10">
              <Use id="shape_10" href="#path10" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>
          
         <Use href="#shape_10" fill="white"/>

          <G clipPath="url(#clip-10)">
            {
              this.props.dinoStore.pointStr[9].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }  
            
          </G> 
        </G> 
        <G>
          <Defs>
            <Path id="path11"
                  opacity="0.1"
                  d="M178.91719185954352,150.55324079526227 C181.54882156388356,150.55324079526227 183.68165931281362,148.44612944004822 183.68165931281362,145.84716588540212 C183.68165931281362,143.24778900957998 181.54882156388356,141.1410909755419 178.91719185954352,141.1410909755419 C176.28598060483054,141.1410909755419 174.15272440627348,143.24778900957998 174.15272440627348,145.84716588540212 C174.15272440627348,148.44612944004822 176.28598060483054,150.55324079526227 178.91719185954352,150.55324079526227 z"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_11" href="#path11" />            
          </Defs>
          
         <Use href="#shape_11" fill="white"/>
        </G> 

        <G >
          <Defs>
            <Path id="path12"
                  opacity="0.1"
                  d="M201.48920164035272,171.2775778807445 C204.12041289506567,171.2775778807445 206.25366909362276,169.17087984670638 206.25366909362276,166.5715029708843 C206.25366909362276,163.97253941623813 204.12041289506567,161.8654280610241 201.48920164035272,161.8654280610241 C198.85757193601268,161.8654280610241 196.72473418708265,163.97253941623813 196.72473418708265,166.5715029708843 C196.72473418708265,169.17087984670638 198.85757193601268,171.2775778807445 201.48920164035272,171.2775778807445 z"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_12" href="#path12" />            
          </Defs>
          
          
         <Use href="#shape_12" fill="white"/>
        </G> 

        <G>
          <Defs>
            <Path id="path13"
                  opacity="0.1"
                  d="M159.34337365634548,252.78740703486352 C161.97458491105849,252.78740703486352 164.10784110961558,250.68070900082546 164.10784110961558,248.08133212500337 C164.10784110961558,245.48236857035718 161.97458491105849,243.37525721514314 159.34337365634548,243.37525721514314 C156.7117439520055,243.37525721514314 154.57890620307543,245.48236857035718 154.57890620307543,248.08133212500337 C154.57890620307543,250.68070900082546 156.7117439520055,252.78740703486352 159.34337365634548,252.78740703486352 z"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_13" href="#path13" />            
          </Defs>
          
         <Use href="#shape_13" fill="white"/>
        </G> 

        <G>
          <Defs>
            <Path id="path14"
                  opacity="0.1"
                  d="M86.2000526514455,321.65539470005024 C88.83126390615845,321.65539470005024 90.96452010471555,319.5486966660122 90.96452010471555,316.9493197901901 C90.96452010471555,314.3503562355439 88.83126390615845,312.24324488032994 86.2000526514455,312.24324488032994 C83.56842294710547,312.24324488032994 81.43558519817546,314.3503562355439 81.43558519817546,316.9493197901901 C81.43558519817546,319.5486966660122 83.56842294710547,321.65539470005024 86.2000526514455,321.65539470005024 z"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_14" href="#path14" />            
          </Defs>
         <Use href="#shape_14" fill="white"/>

         
        </G> 

        <G>
          <Defs>
            <Path id="path15"
                  opacity="0.1"
                  d="M53.22496669324783,298.5234617644069 C55.85617794796071,298.5234617644069 57.989434146517866,296.41635040919283 57.989434146517866,293.81738685454667 C57.989434146517866,291.2180099787245 55.85617794796071,289.11131194468646 53.22496669324783,289.11131194468646 C50.5933369889078,289.11131194468646 48.460373705089644,291.2180099787245 48.460373705089644,293.81738685454667 C48.460373705089644,296.41635040919283 50.5933369889078,298.5234617644069 53.22496669324783,298.5234617644069 z"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_15" href="#path15" />            
          </Defs>
          
         
          
         <Use href="#shape_15" fill="white"/>

         
        </G> 

        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 16)} onResponderGrant={(e) => this._Press(e, 16)} onResponderRelease={(e) => this._Release(e, 16)} >
          <Defs>
            <Path id="path16"
                  d="M231.70628610684986,187.92822145563628 C219.30594985968625,187.92822145563628 208.87525600691424,197.11097802268037 207.45461952317527,209.27874012274836 L200.40583555599326,269.64388455540006 C198.82158526808882,283.2090855515016 187.1932885827804,293.44663775968064 173.36813135560766,293.44663775968064 C157.94407810358464,293.44663775968064 145.44038479854666,305.7970878195377 145.44038479854666,321.0316930454763 C145.44038479854666,334.39230005946115 156.40502037539852,345.22296815519064 169.93140456887772,345.22296815519064 H195.482357244455 C228.9281990330522,345.22296815519064 256.0412241663018,318.441409235526 256.0412241663018,285.4063009230822 V210.1967264546296 C255.08799591594618,197.73633296195825 244.55812950156994,187.92822145563628 231.70628610684986,187.92822145563628 z"
                  stroke="#222222" 
                     stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_16" href="#path16" />            
          </Defs>
          
          <ClipPath id="clip-16">
              <Use id="shape_16" href="#path16" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>
          
          <Use href="#shape_16" fill="white"/>

          <G clipPath="url(#clip-16)">
            {
              this.props.dinoStore.pointStr[10].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }
               
          </G> 
        </G> 

        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 17)} onResponderGrant={(e) => this._Press(e, 17)} onResponderRelease={(e) => this._Release(e, 17)} >
          <Defs>
            <Path id="path17"
                  d="M201.4875278418446,264.246736639279 H256.5203489892417 V254.55931491634703 H202.61901563331153 L201.4875278418446,264.246736639279 zM207.19099625815153,215.4053999144977 L206.0599269163116,225.09282163742967 H256.5203489892417 V215.4053999144977 H207.19099625815153 z"
                  stroke="#222222" 
                     stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_17" href="#path17" />            
          </Defs>
          
          <ClipPath id="clip-17">
              <Use id="shape_17" href="#path17" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>
          
          <Use href="#shape_17" fill="white"/>

          <G clipPath="url(#clip-17)">
            {
              this.props.dinoStore.pointStr[11].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }
               
          </G> 
        </G> 

        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 18)} onResponderGrant={(e) => this._Press(e, 18)} onResponderRelease={(e) => this._Release(e, 18)} >
          <Defs>
            <Path id="path18"
                  d="M152.2159211592834,221.68457522018852 C151.72759044454898,221.68457522018852 151.2359121327984,221.6676290519728 150.74088622403164,221.6333233943654 C108.44901932019383,218.7189957824363 79.84212901847648,197.79337128424535 65.71485116059401,159.43716615206318 C61.770126526659624,148.72925444560366 67.36103199329774,136.89090932280237 78.20138803092405,132.9953572390651 C89.04467321593957,129.09939183415185 101.02865208421652,134.6221893877749 104.97253981889685,145.33051441541042 C115.55847848329397,174.06914910340353 135.51936259148712,179.22078424098453 153.64911113183305,180.46984083483642 C165.1573127741862,181.26300417156762 173.835539588991,191.11988757665685 173.03253475473616,202.48828652235377 C172.26384278989715,213.3656599109706 163.08975316707154,221.68457522018852 152.2159211592834,221.68457522018852 z"
                  stroke="#222222" 
                     stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_18" href="#path18" />            
          </Defs>
          
          <ClipPath id="clip-18">
              <Use id="shape_18" href="#path18" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>
          
         <Use href="#shape_18" fill="white"/>

          <G clipPath="url(#clip-18)">
            {
              this.props.dinoStore.pointStr[12].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }
               
          </G> 
        </G> 

        <G onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this._Move(e, 19)} onResponderGrant={(e) => this._Press(e, 19)} onResponderRelease={(e) => this._Release(e, 19)} >
          <Defs>
            <Path id="path19"
                  d="M203.02700401965774,314.69093288456247 H196.29666021863935 V307.0680504357172 C196.29666021863935,287.9192936731217 180.58094757658213,272.39660358751576 161.1950132559169,272.39660358751576 C141.80907893525162,272.39660358751576 126.09378474282147,287.9192936731217 126.09378474282147,307.0680504357172 V318.7080013940418 C126.09378474282147,333.2234277737519 138.00662717450467,344.9906816542824 152.70174117625572,344.9906816542824 H220.86258247220732 C224.4085246115899,344.9906816542824 227.28201820034852,342.1515784963841 227.28201820034852,338.6503348145445 C227.28118130109448,325.4174440439417 216.4219950302521,314.69093288456247 203.02700401965774,314.69093288456247 z"
                  stroke="#222222" 
                     stroke-width="2"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_19" href="#path19" />            
          </Defs>
          
          <ClipPath id="clip-19">
              <Use id="shape_19" href="#path19" x = {this.props.dinoStore.posX} y = {this.props.dinoStore.posY}/>
          </ClipPath>
          
         <Use href="#shape_19" fill="white"/>

          <G clipPath="url(#clip-19)">
            {
              this.props.dinoStore.pointStr[13].listData.map((item, index) =>
                <Path
                  key={index}
                  d={item.data}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={this.props.dinoStore.strokeColor}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />)
            }
             
          </G> 
        </G> 

        <G>
          <Defs>
            <Path id="path20"
                  d="M229.6889404549778,88.99029159458192 C226.9803160192658,88.99029159458192 224.78554772553656,86.82159538414484 224.78554772553656,84.14658073311593 V76.19014809524411 C224.78554772553656,73.51472012303921 226.9803160192658,71.34643723377813 229.6889404549778,71.34643723377813 C232.3979833403169,71.34643723377813 234.5927516340461,73.51472012303921 234.5927516340461,76.19014809524411 V84.14616741193993 C234.5927516340461,86.82159538414484 232.3979833403169,88.99029159458192 229.6889404549778,88.99029159458192 z"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_20" href="#path20" />            
          </Defs>

          <Use href="#shape_20" fill="black"/>        
        </G> 

        <G>
          <Defs>
            <Path id="path21"
                  d="M278.6927393762451,88.99029159458192 C275.984114940533,88.99029159458192 273.7889281971768,86.82159538414484 273.7889281971768,84.14658073311593 V76.19014809524411 C273.7889281971768,73.51472012303921 275.984114940533,71.34643723377813 278.6927393762451,71.34643723377813 C281.4013638119571,71.34643723377813 283.59655055531334,73.51472012303921 283.59655055531334,76.19014809524411 V84.14616741193993 C283.59655055531334,86.82159538414484 281.4013638119571,88.99029159458192 278.6927393762451,88.99029159458192 z"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_21" href="#path21" />            
          </Defs>
          
          
          <Use href="#shape_21" fill="black"/>       
        </G> 

        <G>
          <Defs>
            <Path id="path22"
                  d="M300.65213890309434,139.46838017629688 C294.3314572869303,139.46838017629688 288.3216837436433,136.76525968530038 284.1618760014198,132.05009170956833 C282.38220973769614,130.03391101307278 282.59561904747727,126.9740943471941 284.63807167697064,125.2166527068704 C286.67926895758285,123.4592110665467 289.7757961975441,123.67000486630332 291.5562993605218,125.68618556279884 C293.8523324639903,128.2888690080289 297.1681273085109,129.78178509571686 300.65213890309434,129.78178509571686 C304.13656894730474,129.78178509571686 307.45194534219837,128.28928232920492 309.7483968952939,125.68618556279884 C311.52680781013646,123.67000486630332 314.6250088486058,123.4592110665467 316.66620612921804,125.2166527068704 C318.7082403090843,126.9740943471941 318.92123116923847,130.03391101307278 317.14240180476884,132.05009170956833 C312.9834309617993,136.7644330429484 306.9728205192584,139.46838017629688 300.65213890309434,139.46838017629688 z"
                  x = {this.props.dinoStore.posX}
                  y = {this.props.dinoStore.posY}
                  />

                <Use id="shape_22" href="#path22" />            
          </Defs>
          
          <Use href="#shape_22" fill="black"/>       
        </G> 
    </Svg>
    
    );
  }
}


