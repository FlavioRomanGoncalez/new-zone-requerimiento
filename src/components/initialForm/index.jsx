import { useEffect, useState } from "react";
import { useFormik } from "formik";
// :::::ICON:::::
import { ArrowRight } from "../../icons";
// :::::SPRING:::::
import { useSpring, animated } from "@react-spring/web";
// :::::COMPONENTE:::::
import Inicial from "../form/inicial";
import AutoEvaluacion from "../form/autoEvaluacion";
import Modal from "../modal";
import Transition from "../animation/transition";

import { validationSchema, initialValues } from "./validation";

const InitialForm = () => {
  const [next, setNext] = useState(0);
  const [empty, setEmpty] = useState(false);
  const [animation, setAnimation] = useState(true);

  function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }

    return true;
  }

  const onSubmit = (values) => {
    // console.log(formik.values);
    // console.log(values);
    console.log("test");
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  {
    console.log(isEmpty(formik.errors));
    console.log(formik.errors);
  }

  const springForm = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 1000,
    },
  });

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 1900);
  }, [next]);

  return (
    <>
      {animation ? (
        <Transition />
      ) : (
        <animated.section style={{ ...springForm }} className="container">
          {next == 0 && <Inicial formik={formik} />}
          {/* {next == 1 && <AutoEvaluacion />} */}
          {/* <Modal /> */}
          {/* <button
            type="button"
            className="btn-next"
            onClick={() => {
              setNext(1);
              // onSubmit();
            }}
          >
            <ArrowRight />
          </button> */}
          {next > 0 ? (
            <button
              type="submit"
              className="btn-next"
              // onClick={() => setNext(1)}
              onClick={formik.handleSubmit}
            >
              Siguiente
            </button>
          ) : (
            <button
              type="submit"
              className="btn-next"
              // onClick={() => setNext(1)}
              onClick={formik.handleSubmit}
            >
              <ArrowRight />
            </button>
          )}
        </animated.section>
      )}
    </>
  );
};

export default InitialForm;
