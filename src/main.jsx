import { createRoot } from "react-dom/client";
const ele = <div className="box" key={'hi'}>
  <span>hello</span>
  world
</div>
console.log(ele,'数据😎😎😎ele');
const root = createRoot(document.getElementById('root'))
console.log(root,'数据😎😎😎root');
root.render('render~')