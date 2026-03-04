import { Fingerprint } from "lucide-react";
import { Button } from "../shadcnui/button";
import { Input } from "../shadcnui/input";

const Login = () => {
  return (
    <section>
      <form className="grid space-y-4">
        <div className="space-y-2">
          <label>Email</label>
          <Input
            type="email"
            placeholder="Enter Your Eamil"></Input>
        </div>
        <div className="space-y-2">
          <label>Password</label>
          <Input
            type="password"
            placeholder="Enter Your Password"></Input>
          <Button
            type="submit"
            className="w-full">
            <Fingerprint /> Login
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Login;
