import { Button } from "react-bootstrap";

export function Card({ name, category, createdOn, setModalShow }) {
  return (
    <div
      className="d-inline-block border rounded-3 overflow-hidden bg-white shadow-sm"
      style={{ cursor: "pointer" }}
      onClick={() => setModalShow(true)}
    >
      <img
        width="100%"
        height="200"
        src="https://source.unsplash.com/282x200/?food"
        alt="food"
      />
      <div className="overflow-hidden m-3">
        <div className="fs-5 text-warning fw-bold mb-2">{name}</div>
        <div className="line-clamp text-muted" style={{ fontSize: "0.8rem" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
      </div>
      <div className="mx-3 mb-3 d-flex align-items-center justify-content-between">
        <div>
          <span className="me-3" style={{ fontSize: "0.8rem" }}>
            🕒 45 min
          </span>
          <span className="me-3" style={{ fontSize: "0.8rem" }}>
            🍽️ 4 persons
          </span>
          <span className="me-3" style={{ fontSize: "0.8rem" }}>
            ⭐ 28
          </span>
        </div>
        <Button size="sm">»</Button>
      </div>
    </div>
  );
}
