export const useTodokun = () => {
const jotai = [
      { id:0, text: "トドくんは人生という道に迷った", image: "/public/image/todokun0.PNG"},
      { id:1, text: "トドくんはだらだらしている" , image: "/public/image/todokun1.PNG"},
      { id:2, text: "トドくんは曲芸をしている", image: "/public/image/todokun2.PNG"},
      { id:3, text: "トドくんは泳いでいる", image: "/public/image/todokun3.PNG"},
      { id:4, text: "トドくんは寝ている", image: "/public/image/todokun4.PNG"},
      { id:5, text: "トドくんは筋トレをしている", image: "/public/image/todokun5.PNG"},
      { id:6, text: "トドくんは勉強をしている", image: "/public/image/todokun6.PNG"},
      { id:7, text: "トドくんはマインドフルネスに目覚めている", image: "/public/image/todokun7.PNG" },
  ]
  const generateRondomId = (length) => {
      const id = Math.random() * (length - 1);
      return Math.floor(id);
  }
  const generateRondom = () => {
      const id = generateRondomId(jotai.length);
      const j = jotai[id];
      return j;
  }
  const [todokun, setTodokun] = useState(generateRondom());
  const generateId = () => {
      setTodokun(generateRondom());
  };

 
  return { todokun, setTodokun, jotai, generateId  };
};