import React from 'react';

export default function Todo({ jobs, onDelete }) {
  if (!Array.isArray(jobs)) {
    return (
      <div className="container mt-4">
        <div className="alert alert-info text-center">
          No jobs available
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
     
      <div className="row mt-4">
        {jobs.map((job) => (
          <div className="col-md-6 col-lg-4 mb-4 " key={job.Sno} style={{
            backgroundColor: job.completed ? "#d4edda" : "#fff",
            textDecoration: job.completed ? "line-through" : "none",
          }}>
            <div>
              <input type="checkbox" checkced={job.completed} onchange={()=>ontoggle(job.sno)} style={{ marginRight: "10px" }}/>
              
            </div>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary ">
                  {job.Title}
                </h5>
                <p className="card-text text-secondary">
                  {job.desc}
                </p>
                <button
                  className="btn btn-danger btn-sm w-100"
                  onClick={() => onDelete(job.Sno)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
