import watch from "./watch.js";

const events = watch.events;
const elements = watch.elements;

export default () => {
  events.forEach((event) => {
    const { eventIds, eventTarget, eventName } = event;

    eventIds.forEach((id) => {
      const DomElement = document.getElementById(id);

      const WatchElementDummy = elements.find((x) => x.elementId === id);
      const IndexOfWatchElement = elements.indexOf(WatchElementDummy);
      const WatchElement = elements[IndexOfWatchElement];

      const method = WatchElement.method;
      let onlyOnce = WatchElement.onlyOnce;

      let Target = document.querySelectorAll(eventTarget);

      if (DomElement != null) {
        if (onlyOnce === undefined) {
          for (let index = 0; index < Target.length; index++) {
            const TargetElement = Target[index];
            TargetElement.addEventListener(eventName, () => {
              method();
            });
          }
        } else if (onlyOnce) {
          method();
          watch.elements[IndexOfWatchElement].onlyOnce = false;
        }
      }
    });
  });
};
