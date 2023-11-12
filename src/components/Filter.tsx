import React from "react";
import { VehicleTypeSelect } from "./VehicleTypeSelect";
import { VehicleFilter } from "../data/vehicles/contracts";
import { VehicleType } from "../data/vehicles/contracts";
import { Input } from "@skbkontur/react-ui";

interface FilterProps {
  filter: VehicleFilter;
  onChange: (filter: VehicleFilter) => void;
}

export class Filter extends React.Component<FilterProps> {
  render(): React.ReactNode {
    return (
      <>
        <Input value={this.props.filter.title} onValueChange={this.handleTitleChange}></Input>
        <VehicleTypeSelect value={this.props.filter.type} onChange={this.handleTypeChange}></VehicleTypeSelect>
      </>
    );
  }

  private handleTitleChange = (title: string): void => {
    this.props.onChange({ ...this.props.filter, title });
  };
  private handleTypeChange = (type: VehicleType | null): void => {
    this.props.onChange({ ...this.props.filter, type });
  };
}
