import React from "react";
import { shallow, mount } from "enzyme";
import Character from "../";

const findElementByData = (data, wrapper) => {
  return wrapper.find("[test-data='" + data + "']");
};

describe("Character", () => {
  let data = {};
  let wrapper;

  beforeEach(() => {
    data = {
      id: 1,
      name: "Rick",
      status: "Alive",
      species: "Human",
      gender: "Male",
      image: "http://imagelink.png",
      origin: {
        name: "Earth",
        dimension: "Dimension 322-F",
      },
    };

    wrapper = mount(<Character data={data} />);
  });

  test("should render without crashing", () => {
    wrapper = shallow(<Character data={data} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should render props properly", () => {
    expect(wrapper.props().data).toMatchObject(data);
  });

  test("should render elements according the properties", () => {
    expect(wrapper.find("img").prop("src")).toEqual(data.image);
    expect(findElementByData("name", wrapper).text()).toEqual(data.name);
    expect(findElementByData("status", wrapper).text()).toEqual(data.status);
    expect(findElementByData("specie", wrapper).text()).toEqual(data.species);
    expect(findElementByData("gender", wrapper).text()).toEqual(data.gender);
    expect(findElementByData("dimension", wrapper).text()).toEqual(
      data.origin.dimension
    );
    expect(findElementByData("origin", wrapper).text()).toEqual(
      data.origin.name
    );
  });
});
