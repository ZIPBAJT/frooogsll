import Head from 'next/head'
import Image from 'next/image'
import { DownloadOutlined } from '@ant-design/icons';
import { Button,} from 'antd';

export default function Home() {
  // JS-часть

  return (
    // JSX-часть
    <>
      {/* simple button */}
      <Button type="primary" icon={<DownloadOutlined />}>
        Download
      </Button>

{/* выров по центру */}
      <Button type="primary" icon={<DownloadOutlined />}style={{margin: "auto" , display: "block"}}>
        Download
      </Button>

{/* отступ с верху */}

      <Button type="primary" icon={<DownloadOutlined />}style={{margin: "auto" ,marginTop :"250px", display: "block"}}>
        Download
      </Button>

{/* отступ с верху с скачиванием  */}

      <div style={{margin: "auto", marginTop :"250px", display: "block" , textAlign: "center"}}>

      <Button 
        type="primary" // главный 
        href="/lione.gif" //gif
        download //скачать
        icon={<DownloadOutlined />}//иконка к кнопке 
        >
        Download
      </Button>

      </div>


    </>
  )
}
