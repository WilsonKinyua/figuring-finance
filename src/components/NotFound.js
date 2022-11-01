import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
export default function NotFound() {
  return (
    <div className="container not-found">
      <div className="row">
        <div className="col-md-12 pt-5 pb-5 text-center">
          <FontAwesomeIcon icon={faCircleExclamation} />
          <h1>Sorry We Can't Find That Page.</h1>
        </div>
      </div>
    </div>
  );
}
