import * as _ from "lodash";

export async function convertToSectionList(list: any, group: string) {
  const listGroup = _.groupBy(list, group);

  let sectionList: [] = [];
  const testing = await Object.keys(listGroup).map((item) => {
    sectionList = [
      ...sectionList,
      {
        date: item,
        data: listGroup[item],
      },
    ] as never;
  });

  return sectionList;
}
