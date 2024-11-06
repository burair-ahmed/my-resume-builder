export default function Certifications() {
    return (
      <div className="mx-auto w-11/12 mt-12">
        <div>
          <h1 className="font-bold text-xl">Certifications</h1>
        </div>
        <hr className="my-4 border-t-2 border-grey-900 w-3/5 p-0" />
        <div className="grid grid-cols-12 mx-auto w-11/12">
          <div className="col-span-6">
            <div className="grid">
              <div className="">
                <ul className="list-disc">
                    <li>MERN Stack Developer @DevNation</li>
                    <li>UI/UX Design @GreatLearning</li>
                    <li>Intro To DevOps @IBM skills network</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }