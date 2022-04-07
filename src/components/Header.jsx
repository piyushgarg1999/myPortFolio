import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="main-header">
      <div className="header-logo">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADoAZ0DASIAAhEBAxEB/8QAGwABAQEAAwEBAAAAAAAAAAAAAAECAwQFBwb/xABNEAACAQEGAQQLDAcGBwAAAAAAAQIDBAUREiFRMQZBcbETFSIyM2Fyc4GRshQjNUJSU3WSk6Oz0QdUVaHB4vBFYoKUotIWJCU0Q0Rj/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAEGAgQFBwP/xAAwEQEAAQIDAwoHAQEAAAAAAAAAAQIDBBExBhIhBRQzQUJRcYGxwRMiMmGRoeEVUv/aAAwDAQACEQMRAD8A/dYyxZyRzaEw1ZyRQGoqRyRzbkijkSAqzbm05bkSNpAMZblxljxCRrAAs25U5bkAFxe4xluwALjLcZpbkAFzS3GaW5ABc0txmluQAXNLcZpbkAFzS3GaW5ABc0txmluQAXNLcZpbkAFzS3GaW5ABc0txmluQAXNLcZpbkAFzS3GaW5ABc0txmluQAXNLcYy3IALjLcmMt2AAxe4xe4AExluHm3AAmMtyYy3NYcCYAYebXUjzbnJgRoDiebc42pbnM0ZaA68s25hKWvSc7RlR49IHBhqzlijOGrOWKA0jkREjaQFSNEwLh4wGpQABUMAAAAApABQQAUEAAAAUgAFIABQQAAAAKQAUgAAAAUgAFBABSAACkAAAANiFGAEBcCAZZlo5DLA4miJHIzKQHXS1ZyRRlJYs5EBpI2jKwNpIClCKBCgAAAAAAAAoEBSACk0Lg9usCAvo6x6OsCAuu3WPR1gQF126yYPbrBmAuBAAA0AAaAACkAAACkKQCkKAICkAAFAgAAAAAAAIMEUjAw0RI28CJAdZLVm0TnZtAaRvYyjSAoBQABQIAAAKAICgCAoAxUk40q7i2pRpVWmtGmoNpnx2N/8AKTLB9t7x1in4eWx9hreBtHma3sM+Fw72Hkx6kaGMqmMspXLZixbuRc36YnTXzep2/wCUv7XvD7eQ7f8AKX9r3j9vI80hofEr71w5nh/+I/EPT7f8pP2veH28if8AEHKT9r3h9vI80zKQiurvROEw8diPxD0nyg5SL+17x/zEjhlyj5Sxxfbm8Ulq27RJJdOJ0aNG12yvSstjozr2ms8KVKmsXLdtvRRXO20j9xdXJe77v7HXtypW63rCST7qxWeX/wA4Nd3L+89NkbFqi5XPCZcTH4jBYOPmpjPuyh5d1Vv0kXlGNos15WyhY3wtd41IwoSXH3uM4OcvRF9J+1u+0XvZYyV4Xq7zm4pJRsdGywi91OHdv0ok5zm805OUsEsW8dFzIydGi3udakYrGc4nhTER9o93eleVpfewpR9EpdbMdsLb8uH2cfyOoD6tF3FeNs53TfTBLqOaN5y07JRXTTk1+6R5oCXuUrZZauimoyfxamj9HMdj+v6wPzZ2rPba1HCLeen8mT1XksIe0DjpVadaCnCWKfFc6ezRyBACgCAoAgKQACgCAAACgCAoAhDRGBliPD0lCA63OzaMvizSA2jaMJG0AKiFQAAAAAAAAAAAAABit4G0eZrewz4XDvYeTHqR90q+BtHma3sM+Fw72Hkx6kc7G9ld9ldLvl7qVRlJxjFOUpNRjGKblKTeCUUtWyHbuv4UuX6SsW/zi2NCmM5yXG5VuUVV5aRMsOw3p+zrw/ylf/aYhdd+WmtRs9G7bb2SvNU4OrZ61Kkm+LnUlHBJcWfcm3i9XxZ594WmUY+54SeaUU6rTekX8T08504wdMdaiXNp7tUZRREef8fnbqumx3LZ5ULO1UtFZf8APWzDCdol8iG1Ncyx14ndANumIiMoVi5cqu1zXXOcyAf14zwOUV/2u5qsLDZ7E/ddSjCuq9qXvMadTHB0oReMmufFrBiqqKYzlnYw9eIri3b4zL9AozazJdyuMvirpb0OOVWzxeErRZk9nXo4+rMfKbXb72vCTnbbbaK2PxZTcaa8UacMIpeg6yox2XqRqTio6oWG3s9VVGdVf4h9i2emDWKfM0+DT2BnkValbuT1jp1ss52KdSwSzpN5aT97x/wteo9mtd1GeLo9xPilq4P0G3TO9ETCuX7c2blVuerg8gG6lOpSm4VIuMlxT/gY3MnxctGtUoTU6b14SXNJbM9ujVp1oRqQ4PiueL50z8+dqx13RqxTfvdTCM1s+aQHtAAIUhSAAAAAAAAAAAAAAAMBgQseD6QVcAOq+LNow+LNoDa4GkZXA0gGhVwIUAAAAAAAAAAAAAAxW8DaPM1vYZ8Lh3sPJj1I+6VvA2jzNb2GfC4d7DyY9SOdjeyu+yul3y91O3dnwpcv0lYvxUdQ7d2fClyeO8rF+KjRp+qFuxHQ1+E+j7TVqKjCrVl8RN4bvHBI/PznKcpzk8ZSblJ7tnpXpUwVKkvjSlVl0LuUeWd944DcHPZKCr11Fr3uCz1H4lwj6Qh3bDZFFRtFRYyaxpRfCK+U1u+Y/MfpDscKljuq3ZffKNqqWWTw4060M6TfHRx/eftz8ny9qQjc9kpPvqt40nHop05yf9eM+N7o5dPkmZ57by1z/T5d2M1lOXBDQ42b1L4cQ/efo7qPsV/UOaNey1kvHOm4PqP3R+D/AEexeN/z5m7FD05ZyP3h2MPOduHmXLlMU4+5Efb0hw2izwtEMr0mu8ls9ug8OcXCUoT0lF5WvGj9EccqNCc+ySpQlPBLNKKb04cT7uO8GFOrU8HCcsfkxbXr4Hbo3faZTg6iVOCcZNNqUpYa4JL8z114uAAAAIUgAAAAAAAAAAAAAAAAABljwIVcAOq+LNow+LNoDa4GkZRpACohUAAAAAAAAAKQoAAAcdbwNo8zW9hnwuHew8mPUj7pW8DaPM1vYZ8Lh3sPJj1I52N7K77K6XfL3aO1dnwpcn0lYvxUdU7V2Ju9bjS4u8rEl09lRo06wt2I6Gvwn0fUrwnntVbDhTywS6NWdQ/PXvyzpULfbKNkuyz1oUq9WEq1prVs1WUZOMpKFNpJbHRXLa1v+yLt+vav952Jv24nLN5lRyNjK4iqKNfB+vPXu6nloSqPjVm3/hjoj52uWtq/ZN2/XtX+87EOX16whGELuu+MYrLBY12orozkc4t976f4WOnSn9w+kNqKlJtKMYuUpSaUYxWrcm+C3PlnKu+qd72+ELNJysVijOjZ5cFWnJrPVXieCS6Mec6l58pL9veMqVprxhZm9bPZounSl4p6uTXSzyTUv4jfjdp0WbkfkSrCV/Hvz83V9kLxBuhQr2uvZ7LZ1jXtNWFCkubNN4Zn4lxfQaMRnwWiZimN6rR9G5CWZ0ror2mSadttlWpBvnp0kqUWvUz9YeTZ6tG66FC7qNFunYqVOzQefBzyRWMn3PFvV9Jy9tF+r/efyndt07tMUvIMbf5ziK73fM/z9PSIed20X6v95/KO2q+Y+8/lPo1Hog83tov1f7z+UvbVfMfefygekQ6NG8adSpCEqTjmeCeZSwb30R3uHECgAAQpABSFAgAAAAAUhQIAABVwIVAdZ44s0sSPizSA0uBpYmVwNIAVYkKgGo1AAajUABqNQAGo1BQJqNSgDjreBtHma3sM+Fwxyw8mPUj7pW8DaPM1vYZ8Lh3sPJj1I52N7K77K6XfL3XU7t0/C9xb9s7G/T2RNHTO5dTSva42+a87E/vUaVH1Qt2I6Gvwn0eZaW5Wm0yfF1qzfS5tmUdm8qEqN53hZ8spVIWu0QUYxbk0qsl3q1OJULUv/XtH2NT8jPKWnTcoyjiiNIdjrLjSrLppVF/AuWaWLp1cN+x1MPXgYTDaprpnraQNU6Veq8tKhaKkuaNOjVlJ+iMT27DyS5SW5xbsysdF4N1bc8rXjjSg3Nv1CKKqp4Qi7irFinO7XER4vC1xikm5SkowjFOUpSk8FGMVq2+Y+kckuTVS7o9srwglb6sHGjReD9yUpYYpv5cvjbcDv3LyWuq52q3dWq3YYO01kk47qjBdzFet+Pb3zo2MNFE71Skcr8u85pmxh+FM6z3/AMeFbP8AubV46rZwHYtifum06fHx9DSOubqqgAAAAJap+Ep+ch1n6J8X0n56n4Sn5yHWfoud9L6wg1JqUBCajUpAGo1BQJqNQAGo1AAajUFAmo1AAFRGFhgBwPizSMvizSA0uBpGUaWAAq4E0KAAAAAAAAAKQAUEAGK3gbR5mt7DPhcO9h5MepH3St4G0eZrewz4XDvYeTHqRzsb2V32V0u+Xu0dq7Nb0uX6Rsa+9R1Dt3Z8KXN9JWP8VGjT9ULdiOir8J9H0C8brs9mvK22mlDu7dJWipJpY5sFCST44aY+k63YOn1n6a8qKnTVTDWlJ4+RJ4HkZEd2IiNHj9Vyquc6pdDsL8Z7lyVcKVayzwxpydWnj8mXfLXx9Z0cqOSjN0atOrHjB+tPRpksM5fo1pwwXRp1E/rYzCcKkI1IPGMlivyfjNEo6wABDiq2ez1mpVKalLDDHFp/uZx+4LF81/rn+Z2QB1vcFi+a/wBc/wAx7gsPPS9OefDjudk6V4WhU6boxfvlVd1/dp8+PSB5dR03UqOksKeZ5Fr3vNxMABk3T8JT85DrP0XO+l9Z+cp+Ep+XDrP0XO+l9YRKggCFIAAKQAAAAAAApAAADAMR4ekjCA4XxZtGHxZtAaXpL6yIoFKRFAgAAAAAAAAAAAADFbwNo8zW9hnwuHex6F1H3St4G0eZrewz4XDvYeTHqRzsb2V32V0u+Xup27s+FLl4/CVj/FR1Dt3Z8KXL9JWP8VGjT9ULdiOir8J9H2qcVNTjLVSUovoeh4FalOjUnTlzd694vgz9C+L6WdW12ZWiHc+Fji4N8+8Wd943OrxAVpxbTTUk8GnzMgHZstqnZ5NNOVKTxnHZ/KiezCcKkVOElKL51/E/OnJSq1qTzU5uL8XB9KBk/QA8ynecksKtFS04weX9z0OZXlZOeNZf4YvqkEO6DoSvOisctKpLbM4x/izq1bfaaukcKcXzU8cfrPUD0LTa6dnTjHCdb4seaL3k11HjSnKpKU5tylJ4yb52R4kCYPWANQlqHhKfnIdZ+i530vrPz1PwlPzkOs/Q876X1hEqQpAgAAAAAAAAAAAAAAwTUAwg8SR4PpA4nxZtGOdm0BpGjKNACkKBACgQAAAUAQFAEBQBx1vA2jzNb2GfC4d7DyY9SPu0oqUZxeOEoyg8NpJxPh9rs9a77RWslqXYqtCcqbU+5UlF4KcHLinxRz8bHCJXTZWunO5Tnx4e7iO3dnwpc30lY/xUdLslL5yn9eP5nbuydN3pcuE4P/qNi0zL51GhR9ULjiOir8J9H258X0sg530sHfeNTq6lrsar4zg1Grh6J4cz8Z5E4zhKUZJqSeqfE/RHFWoUa6wqRxfxZLvo+kDwAd2td9ohmdP32P8Ad0n6UdNqUXhJOL2kmn+8MkAAQADnS53wXF+pADdOnUqzUKaxk/3LdvY7FGw2mrlcl2Knzua7p9EOJ6lGz0bPFxprBvv5S1lJ+NgeHWp9iq1aeOORtY79Bg7FtjKNpruSwUpZlzJp7HX0/rADdPwlPzkOs/Q876X1n52DXZKeq8JDnW5+jfF9LAEKAhAUgAFAEAAAFAEBSAQAMAyR4ekjEeHpA4udm0zGOrNJgciZTK4GlgAKTQoAAAAAAAAAAoEBQBP6ZmVKjPDslKnPDTu4Ql1o0UJiZic4cPueyfq1n+yp/kVULKnFqhQTTxTVKCaa500sTkBGUMt+rvAASwAUgAkownipxjLykn1mgB1pWKxy/wDEl5La/iY7XWPap9dnbAHVVgsaaeRvD5U5dRzwpUafg6cIPeMUn6zZQICkAjjCXfRjLykn1k7HR+bp/UiaAGex0fm6f1UaKQACgCApAABQIAAAGJNALiQaDFAMSAjYEbInxI+ki6QONPVnImcKerNpgcyZpHGmbTA0CYlAuIIUAAAAAAAAAAABSAAAAAAAAAAAAAAAAAAAAAAApAAKQAAAAAAAExAAADEBj4iEYbANmWRsy2AbImZbImBx46s5IvQ6+OpyRfADnTNpnEmbTA5Uyo40zSYGtSmcS84FKsSACgAAUgAoIAKCAAAAKQACkAAoIAAAAFIAKQAACajUDRBqQDRNSAC6k1AAuo1IAAeJCMCkxJjwI2BWzLZGyNgGzDYbMNgGyJmWzKYHGsceByRzaaAAcsc2xyLNsABpKWxpZtgAN91sXB7AAXB7BKWwAFysZWABUpbFyy2AAZZbDLLYABllsMstgAGWWxMstgALllsMstgAGWWxMstgALllsMstgAJg9hg9gAJllsMrAAZWMH4wAGEvGMJeMABg/GMGABMsthhLYABhLYYPYABhLYmEtgAJhLYjUtgAJhLYjzbAAZalsZalsABh47HG8dgAMPHYizbc4AH/2Q=="
          alt=""
          className="logo"
        />
      </div>
      <div className="header-menu">
        <ul className="header-ul">
          <li className="header-li">
            <NavLink
              activeClassName="active"
              className="header-link"
              exact
              to=""
            >
              Home
            </NavLink>
          </li>
          <li className="header-li">
            <NavLink
              activeClassName="active"
              className="header-link"
              exact
              to="/About"
            >
              About
            </NavLink>
          </li>
          <li className="header-li">
            <NavLink
              activeClassName="active"
              className="header-link"
              exact
              to="/Contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="header-li">
            <NavLink
              activeClassName="active"
              className="header-link"
              exact
              to="/Download-cv"
            >
              Download CV
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
