import { Button } from "@nextui-org/button";

export default function DebugPanel() {

    function queryWifiList() {
        console.log("Query WiFi List");
        // 发起一个请求，获取WiFi列表
        // fetch("/get")
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.error("Error fetching WiFi list:", error);
        //     });
        // 把color post出去

    }

    return <div className="w-full flex flex-col items-center justify-center flex-wrap gap-4">
        <Button color="primary" variant="ghost" className="w-full max-w-xs" onClick={queryWifiList}>
            Test Request
        </Button>
    </div>;
}