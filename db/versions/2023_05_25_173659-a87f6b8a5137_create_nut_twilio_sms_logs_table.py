"""create nut.twilio-sms-logs table

Revision ID: a87f6b8a5137
Revises: 0303d9f1cf03
Create Date: 2023-05-25 17:36:59.635813

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a87f6b8a5137'
down_revision = '0303d9f1cf03'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'twilio_sms_logs',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('from', sa.String(length=31), nullable=False),
        sa.Column('to', sa.String(length=31), nullable=False),
        sa.Column('body', sa.LargeBinary, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_twilio_sms_logs_from', 'twilio_sms_logs', ['from'])
    op.create_index('idx_twilio_sms_logs_to', 'twilio_sms_logs', ['to'])


def downgrade() -> None:
    op.drop_table('twilio_sms_logs')
