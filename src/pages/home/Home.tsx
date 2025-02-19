import TopBox from "../../components/topBox/TopBox"
import BarChartBox from "../../components/barChartBox/BacChartBox"
import BigChartBox from "../../components/bigChartBox/BigChartBox"
import ChartBox from "../../components/charBox/ChartBox"
import PieChartBox from "../../components/pieCharBox/PieChartBox"
import "./Home.scss"
import { 
    barChartBoxVisit, barChartBoxRevenue, chartBoxConversion, 
    chartBoxProduct, chartBoxRevenue, chartBoxUser 
} from "../../data"

const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxProduct} />
            </div>
            <div className="box box4">
                <PieChartBox/>
            </div>
            <div className="box box5">
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className="box box6">
                <ChartBox {...chartBoxRevenue} />
            </div>
            <div className="box box7">
                <BigChartBox/>
            </div>
            <div className="box box8">
                <BarChartBox {...barChartBoxVisit} />
            </div>
            <div className="box box9">
                <BarChartBox {...barChartBoxRevenue} />
            </div>
        </div>
    )
}

export default Home