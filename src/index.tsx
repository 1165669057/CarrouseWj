import * as React from "react";
import * as ReactDOM from "react-dom";
import {toRadians} from "./util/carrouseMath"
import "../css/carrouse.css"
import {ReactElement} from "react";
interface CarrouseProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    desc?: string,
    mRotationX?: number,//设置x轴旋转
    mCarrouselR?: number,//旋转半径
    mRotationZ?:number//Z旋转
    mAngle?:number//旋转角度
    autoTime?:number
    auto?:boolean
}
export default class Carrouse extends React.Component<CarrouseProps, {}> {
    static defaultProps={
        auto:false,
        autoTime:1500
    }
    contentObj: any;
    mRotationX: number; //x轴旋转
    mRotationZ:number;//Z轴旋转
    mCarrouselR: number; //旋转半径
    mDistance: number; //camera和旋转木马的距离
    mAngle: number=0;//旋转的角度
    mCarrouselViews: any[]=[];//子元素集合
    viewCount: number;//子元素的个数
    timer:any;
    state = {};
    constructor(props: any) {
        super(props);
    }
    init = () => {//初始化属性值
        this.mCarrouselR = this.props.mCarrouselR ? this.props.mCarrouselR : (this.contentObj.clientWidth / 2);
        this.mRotationX = this.props.mRotationX?this.props.mRotationX:0;
        this.mRotationZ=this.props.mRotationZ?this.props.mRotationZ:0;
        this.mDistance = 2.0 * this.mCarrouselR;
        this.mAngle=this.props.mAngle?this.props.mAngle:0;
    }
    //获取所有子元素
    getChildViews = () => {
        let curNodes = this.contentObj.childNodes;
        this.viewCount = curNodes.length;
        for (let node of curNodes) {
            this.mCarrouselViews.push(node);
        }
    }
    componentDidMount() {
        this.init();
        this.getChildViews();
        this.refreshLayout();
    }
    refreshLayout=()=>{

        for (let  i=0;i<this.mCarrouselViews.length;i++){
            this.mCarrouselViews[i].classList.add("carrousel-child");
            let radians =this.mAngle + 180 - i *  360/(this.viewCount);
            let x0 =  Math.sin(toRadians(radians)) * this.mCarrouselR;
            let y0 =  Math.cos(toRadians(radians)) * this.mCarrouselR;
            let scale0 =(this.mDistance - y0) / (this.mDistance + this.mCarrouselR);
            let rotationX_y =  Math.sin(toRadians(this.mRotationX * Math.cos(toRadians(radians)))) * this.mCarrouselR;
            let rotationZ_y = - Math.sin(toRadians(-this.mRotationZ)) * x0;
            let rotationZ_x = ((Math.cos(toRadians(-this.mRotationZ)) * x0) - x0);
           this.mCarrouselViews[i].style.transform=`scale(${scale0},${scale0}) translate(${x0 + rotationZ_x}px,${rotationX_y + rotationZ_y}px)`
            //this.mCarrouselViews.get(i).setTranslationX(x0 + rotationZ_x);
            //this.mCarrouselViews.get(i).setTranslationY(rotationX_y + rotationZ_y);
            console.log("translateX"+i,x0 + rotationZ_x);
            console.log("translateY"+i,rotationX_y + rotationZ_y);
        }
    }
    autoRun=()=>{ //自动旋转
        this.stopAutoRun();
        this.timer=setInterval( ()=> {
            this.mAngle+=360/5;
            this.setMAngle(this.mAngle);
        },this.props.autoTime);
    }
    stopAutoRun=()=>{
        if(this.timer){
            clearInterval(this.timer);
        }
    }
    setMRotationX=(x:number)=>{ //设置x轴旋转
        this.mRotationX=x;
        this.refreshLayout();
    }

    setMRotationZ=(z:number)=>{//设置Z轴旋转
        this.mRotationZ=z;
        this.refreshLayout();
    }

    setMAngle=(angle:number)=>{//设置旋转角度
       this.mAngle=angle;
        this.refreshLayout();
    }
    setMCarrouselR=(r:number)=>{
        this.mCarrouselR=r;
        this.refreshLayout();
    }
    xLocation=0;
    zLocation=0;

    render() {
        return (
            <div style={this.props.style} ref={(obj) => {
                this.contentObj = obj;
            }} className={this.props.className + " content"}>
                {this.props.children}
            </div>
        )
    }
}
/*ReactDOM.render(
    <div style={{display:"flex",flex:1,flexDirection:'column'}}>
        <Carrouse
            mRotationX={-20}
            ref={()=>{
        }}>
            <div>
                <img height={"60%"} width={"60%"} src={"./img/box_cal_big.png"}/>
                <img width={688/4} height={386/4} src={"./img/box_middle_big.png"}/>
            </div>
            <div>
                <img height={"60%"} width={"60%"} src={"./img/box_can_big.png"}/>
                <img width={688/4} height={386/4} src={"./img/box_middle_big.png"}/>
            </div>
            <div>
                <img height={"60%"} width={"60%"} src={"./img/box_flow_big.png"}/>
                <img width={688/4} height={386/4} src={"./img/box_middle_big.png"}/>
            </div>
            <div>
                <img height={"60%"} width={"60%"} src={"./img/box_sub_big.png"}/>
                <img width={688/4} height={386/4} src={"./img/box_middle_big.png"}/>
            </div>
            <div>
                <img height={"60%"} width={"60%"} src={"./img/box_node_big.png"}/>
                <img width={688/4} height={386/4} src={"./img/box_middle_big.png"}/>
            </div>
        </Carrouse>
    </div>
    ,
    document.getElementById("example")
);*/

