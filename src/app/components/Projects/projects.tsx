export default function Experience() {
    return (
      <div className="mx-auto w-11/12 mt-12">
        <div>
          <h1 className="font-bold text-xl">Projects</h1>
        </div>
        <hr className="my-4 border-t-2 border-grey-900 w-3/5 p-0" />
        <div className="grid grid-cols-12 mx-auto w-11/12">
          <div className="col-span-6">
            <div className="grid">
              <div className="">
                <h1>REAL ESTATE WEB/APP | NEXTJS, Tailwind CSS, MongoDB, React, FireBase</h1>
              </div>
            
            </div>
          </div>
          <div className="col-span-6">
            <div className="grid">
              <div className="flex justify-end">
                <h1>Sep-Oct 2024</h1>
              </div>
            
            </div>
          </div>
          <div className="col-span-12">
            <ul className="list-disc">
                <li>Developed a Full-Stack Real Estate web/app which performs all crud operations Home Page, About Us
Services Admin Dashboard Hierarchies SuperAdmin, Agent, Client, User Sign-In Add-Listings
Update-Listings Delete-Listings Sign-Out & Contact Form
</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }