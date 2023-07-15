import { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";

const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.divForm}>
      <form  className={styles.Form} onSubmit={handleSubmit}>
        {/* USERNAME */}
        <div className={styles.divEmail}>
        <label className={styles.labelEmail}>Email</label>
        <input  className={styles.inputEmail} 
          type="text"
          placeholder="Email..."
          name="email"
          onChange={handleChange}
          value={userData.email}
        />
        {errors.e1 ? (
          <p>{errors.e1}</p>
        ) : errors.e2 ? (
          <p>{errors.e2}</p>
        ) : (
          <p>{errors.e3}</p>
        )}

        </div>
        <div className={styles.divPassword}>
          {/* PASSWORD */}
        <label className={styles.labelPassword}>Password</label>
        <input
          type="password"
          placeholder="Password..."
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
        {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
        </div>
        <div className={styles.divLogin}>
        <button className={styles.Button}>LOGIN</button>
        </div>
        
      </form>
    </div>
  );
};

export default Form;
