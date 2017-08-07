/******************************************************************************
 * Copyright 2017 The Apollo Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *****************************************************************************/

#ifndef MODULES_PLANNING_PLANNER_EM_DECIDER_H_
#define MODULES_PLANNING_PLANNER_EM_DECIDER_H_

#include <memory>
#include <string>
#include <vector>

#include "modules/common/status/status.h"
#include "modules/planning/common/frame.h"
#include "modules/planning/proto/decision.pb.h"
#include "modules/planning/proto/planning.pb.h"
#include "modules/planning/reference_line/reference_line.h"

/**
 * @namespace apollo::planning
 * @brief apollo::planning
 */
namespace apollo {
namespace planning {

class Decider {
 public:
  explicit Decider(DecisionResult* decision_result);
  ~Decider() = default;

  const DecisionResult &Decision() const;
  apollo::common::Status MakeDecision(Frame* frame);

 private:
  int MakeMainStopDecision(Frame* frame,
                           PathDecision *const path_decision);
  int MakeEStopDecision(PathDecision *const path_decision);
  int SetObjectDecisions(PathDecision *const path_decision);

 private:
  DecisionResult* decision_ = nullptr;  // not owned
};

}  // namespace planning
}  // namespace apollo

#endif  // MODULES_PLANNING_PLANNER_EM_DECIDER_H_
