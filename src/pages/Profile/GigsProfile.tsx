import React from 'react'

type Props = {}

export default function GigsProfile({}: Props) {
  return (
    <div className="gigs-column col-8">
    <div className="gigs-prod">
        <div className="gigs-prod-inner card-prod row">
            <div className="prod-img col-4">
                <img src="./img/prod-1.jpg" alt="" />
            </div>
            <div className="prod-title col-8">
                <a href="#" className="prod-name">Lập trình front end với react js</a>
                <p className="prod-title">A highly focused software developer in a variety of development and engineering positions.I have advanced skills in Java, PHP, SCSS, HTML, CSS, Bootstrap, Javascript, Jquery.</p>
                <div className="prod-footer d-flex">
                    <div className="btn-detail btn">View detail</div>
                    <div className="btn-edit btn" >Edit</div>
                    <div className=" btn">X</div>
                </div>
            </div>
        </div>
        <div className="gigs-prod-inner card-prod row">
            <div className="prod-img col-4">
                <img src="./img/prod-1.jpg" alt="" />
            </div>
            <div className="prod-title col-8">
                <a href="#" className="prod-name">Lập trình front end với react js</a>
                <p className="prod-title">A highly focused software developer in a variety of development and engineering positions.I have advanced skills in Java, PHP, SCSS, HTML, CSS, Bootstrap, Javascript, Jquery.</p>
                <div className="prod-footer d-flex">
                    <div className="btn-detail btn">View detail</div>
                    <div className="btn-edit btn" >Edit</div>
                    <div className=" btn">X</div>
                </div>
            </div>
        </div>

    </div>

  </div>
  )
}