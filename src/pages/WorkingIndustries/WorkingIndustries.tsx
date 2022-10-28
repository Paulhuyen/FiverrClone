import React from "react";

type Props = {};

export default function WorkingIndustries({}: Props) {
  return (
    <div className="working-industries">
      <section className="popular-services">
        <div className="container">
          <h2>Popular professional services</h2>
          <div className="owl-carousel owl-theme">
          <div className="item">
              <h4>1</h4>
            </div>
            <div className="item">
              <h4>2</h4>
            </div>
            <div className="item">
              <h4>3</h4>
            </div>
            <div className="item">
              <h4>4</h4>
            </div>
            <div className="item">
              <h4>5</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
