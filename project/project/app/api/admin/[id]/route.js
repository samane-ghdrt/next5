export const PATCH = async (request, { param }) => {
  const id = await param;
  const { email, name } = await request.json();
  if (!name) {
    return Response.json({ msg: "name require" }, { status: 404 });
  }
  const data = await fetch(`${id}`);
  const admin = await data.json();
  if (!admin) {
    return Response.json({ msg: "admin not found" }, { status: 404 });
  }
  const response1 = await fetch(`${id}`, {
    method: "PATCH",
    body: JSON.stringify({ email, name }),
    headers: {
      Content_Type: "application/json",
    },
  });
  const newUser = await response1.json();
  return Response.json({ msg: "", data: newUser });
};
export const DELETE = async (request, { param }) => {
  const id = await param;
  const data = await fetch(`${id}`);
  const admin = await data.json();
  if (!admin) {
    return Response.json({ msg: "amin not found" }, { status: 404 });
  }
  const response = await fetch(`${id}`, {
    method: "DELETE",
  });
  return Response.json({ msg: "" });
};
