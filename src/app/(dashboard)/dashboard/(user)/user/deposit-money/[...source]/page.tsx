"use client"

import FormTitle from "@/components/Forms/FormTitle";

const DepositFormPage = ({ params }: { params: { source: string } }) => {

    const source = params.source[0]

    return (
        <div className="p-4 lg:p-6" >
            <FormTitle title="Deposit Money" />
        

        </div>
    );
};

export default DepositFormPage;