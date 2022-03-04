import "./list.css";
import { Container } from "semantic-ui-react";
import { Breadcrumb } from "semantic-ui-react";

import { Message } from "semantic-ui-react";

function Dirlist() {
  return (
    <Container text>
      <div>
        <br />
        <br />
        <Breadcrumb>
          <Breadcrumb.Section>
            <a href="/"> Home </a>
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>List</Breadcrumb.Section>
        </Breadcrumb>
        <br />
        <br />

        <h1>Directory Tree</h1>
        <p>
          <a href="http://ripnsbm.github.io/live1">
            http://ripnsbm.github.io/live1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/bank_payment_conv.csv">
            bank_payment_conv.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/convocation_2020_ucd.csv">
            convocation_2020_ucd.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/convocation_2020_ucd.csv.1">
            convocation_2020_ucd.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/convocation_2020_ucd.csv.2">
            convocation_2020_ucd.csv.2
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/eneble_list.csv">
            eneble_list.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/mohe_save.csv">
            mohe_save.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/mohe_save.csv.1">
            mohe_save.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/mohe_save.csv.2">
            mohe_save.csv.2
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/pay_recovery_cert.csv">
            pay_recovery_cert.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/pay_recovery_cert.csv.1">
            pay_recovery_cert.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/pay_recovery_cert.csv.2">
            pay_recovery_cert.csv.2
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/pay_recovery_cert.csv.3">
            pay_recovery_cert.csv.3
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/pay_recovery_cert.csv.4">
            pay_recovery_cert.csv.4
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/pay_recovery_cert.csv.5">
            pay_recovery_cert.csv.5
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/pay_recovery_cert.csv.6">
            pay_recovery_cert.csv.6
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/pay_recovery_cert.csv.7">
            pay_recovery_cert.csv.7
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/pay_recovery_cert.csv.8">
            pay_recovery_cert.csv.8
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/pay_recovery_cert.csv.9">
            pay_recovery_cert.csv.9
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/recievable_from_student_copy.csv">
            recievable_from_student_copy.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/recievable_from_student_copy.csv.1">
            recievable_from_student_copy.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/register.csv">register.csv</a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/student_payment_data.csv">
            student_payment_data.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/students.csv">students.csv</a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/tmp_daily_recovery.csv">
            tmp_daily_recovery.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/tmp_daily_recovery.csv.1">
            tmp_daily_recovery.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/tmp_group.csv">
            tmp_group.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/tmp_group.csv.1">
            tmp_group.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/tmp_pay.csv">tmp_pay.csv</a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/tmp_pay.csv.1">
            tmp_pay.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/tmp_recovery_summery.csv">
            tmp_recovery_summery.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/tmp_recovery_summery.csv.1">
            tmp_recovery_summery.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/tmp_recovery_summery.csv.2">
            tmp_recovery_summery.csv.2
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/tmp_student_signlist.csv">
            tmp_student_signlist.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/tmp_student_signlist.csv.1">
            tmp_student_signlist.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/tmp_updated_feetype.csv">
            tmp_updated_feetype.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/tmp_users.csv">
            tmp_users.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_degree_fees_foreign.csv">
            umis_degree_fees_foreign.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_department_users.csv">
            umis_department_users.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_loginlog.csv">
            umis_loginlog.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_marketing_programme_name.csv">
            umis_marketing_programme_name.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_module_2020_09_18.csv">
            umis_module_2020_09_18.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_std_register_2020_12_31_before_active.csv">
            umis_std_register_2020_12_31_before_active.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_std_register_2021_07_28.csv">
            umis_std_register_2021_07_28.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_std_register_2021_07_28.csv.1">
            umis_std_register_2021_07_28.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_std_register_online_copy1.csv">
            umis_std_register_online_copy1.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_std_register_online_copy.csv">
            umis_std_register_online_copy.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_std_register_online_copy.csv.1">
            umis_std_register_online_copy.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_std_register_online.csv">
            umis_std_register_online.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_std_register_pgd_online.csv">
            umis_std_register_pgd_online.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_std_register_prof_prog.csv">
            umis_std_register_prof_prog.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/umis_users.csv">
            umis_users.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/unblock_copy1.csv">
            unblock_copy1.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/unblock_copy1.csv.1">
            unblock_copy1.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/unblock_copy2.csv">
            unblock_copy2.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/unblock_copy2.csv.1">
            unblock_copy2.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/unblock_copy4.csv">
            unblock_copy4.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/unblock_copy4.csv.1">
            unblock_copy4.csv.1
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/user_with_umis_id.csv">
            user_with_umis_id.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/verified_final_data.csv">
            verified_final_data.csv
          </a>
          <br />
          ├──{" "}
          <a href="http://ripnsbm.github.io/live1/verified_final_data.csv.1">
            verified_final_data.csv.1
          </a>
          <br />
          └──{" "}
          <a href="http://ripnsbm.github.io/live1/verified_final_data.csv.2">
            verified_final_data.csv.2
          </a>
          <br />
        </p>
        <br />
        <hr />
      </div>
      <br />
      <br />
      <Message negative>
        <Message.Header>Removing this information </Message.Header>
        <p>
          sorry for causing trouble if you want this to removed email me at{" "}
          <a href="mailto:ripnsbm@protonmail.com">
            ripnsbm[at]protonmail[dot]com{" "}
          </a>{" "}
          i will remove the information{" "}
        </p>
      </Message>

      <br />
      <br />
      <br />
    </Container>
  );
}

export default Dirlist;
