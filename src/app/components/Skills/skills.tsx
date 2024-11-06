export default function Skills() {
    return (
      <div className="mx-auto w-11/12 mt-12">
        <div>
          <h1 className="font-bold text-xl">Technical Skills</h1>
        </div>
        <hr className="my-4 border-t-2 border-grey-900 w-3/5 p-0" />
        <div className="grid grid-cols-12 mx-auto w-11/12">
          <div className="col-span-6">
            <div className="grid">
              <div className="">
                <h1><b>Languages:</b> C++, JavaScript, Python, HTML, CSS</h1>
                <h1><b>Frameworks:</b> Tailwind, Bootstrap, JQuery, ExpressJS, NEXT JS</h1>
                <h1><b>Developer Tools:</b> VS Code, MongoDB, MySql, Firebase</h1>
                <h1><b>Libraries:</b> ReactJS, NodeJS, NumPy, Pandas, AntDesign</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }